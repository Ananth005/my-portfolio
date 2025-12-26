import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const vertex = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragment = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  //	Simplex 3D Noise 
  //	by Ian McEwan, Ashima Arts
  //
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;

    float mouseDist = length(uv - uMouse);
    
    // Original colors kept
    vec3 color1 = vec3(0.01, 0.03, 0.07); // Deep background
    vec3 color2 = vec3(0.12, 0.25, 0.55); // Blue glow
    vec3 color3 = vec3(0.05, 0.08, 0.15); // Secondary blue

    // 1. SLOW MAJESTIC FLOW
    float slowTime = uTime * 0.04;

    // 2. SUBTLE DOMAIN WARPING (The "Liquid" feel)
    vec2 warp = p;
    warp.x += snoise(vec3(p * 0.5, slowTime)) * 0.3;
    warp.y += snoise(vec3(p * 0.3, slowTime * 1.1)) * 0.2;

    // Layered noise
    float n1 = snoise(vec3(warp * 0.7, slowTime * 0.4));
    float n2 = snoise(vec3(warp * 1.5, slowTime * 0.7));
    float combinedNoise = (n1 * 0.7 + n2 * 0.3);

    // 3. TUNED GLOW (Pulled back for sophistication)
    // Decreased power (2.0) for softer edges and wider reach
    float glow = pow(smoothstep(-0.3, 0.8, combinedNoise), 2.0);
    
    // 4. BALANCED MOUSE INFLUENCE
    float mouseGlow = exp(-mouseDist * 3.5) * 0.25;
    
    // Primary mix with adjusted weight (0.8 instead of 1.5)
    vec3 finalColor = mix(color1, color3, glow * 0.8);
    finalColor = mix(finalColor, color2, glow * 0.7);
    
    // 5. SUBTLE ADDITIVE BLOOM (Reduced by 60%)
    finalColor += color2 * glow * 0.2; 
    finalColor += color2 * mouseGlow;

    // Subtle grain
    float grain = (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.015;
    finalColor += grain;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function AuroraBackground() {
  const ref = useRef();
  const mouse = useRef([0.5, 0.5]);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas.parentElement;
    const renderer = new Renderer({ canvas, dpr: 1 });
    const gl = renderer.gl;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [0, 0] },
        uMouse: { value: [0.5, 0.5] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const observer = new ResizeObserver(() => {
      const { clientWidth: w, clientHeight: h } = parent;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    });
    observer.observe(parent);

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      mouse.current = [
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height,
      ];
    };
    window.addEventListener('mousemove', handleMouseMove);

    let request;
    const loop = (t) => {
      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uMouse.value = mouse.current;
      renderer.render({ scene: mesh });
      request = requestAnimationFrame(loop);
    };
    request = requestAnimationFrame(loop);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(request);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
