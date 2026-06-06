<section id="projects" class="home-section home-section--projects">
  <div class="site-container">
    <div class="section-heading">
      <div class="section-eyebrow">05 / Projects</div>
      <h2>Projects</h2>
      <p>Production-facing optimization work across AIGC system-algorithm co-design, model optimization, and edge-cloud inference systems.</p>
    </div>

    <div class="project-feature-stack">
      <article class="project-feature-card project-feature-card--wide">
        <div class="project-card__meta">AIGC System-Algorithm Co-design</div>
        <div class="project-feature-card__body">
          <div>
            <h3>Seedance / Seedream Inference and Training Optimization</h3>
            <p>Led algorithm optimization and software-hardware co-optimization for Seedance 1.0-2.0 and Seedream 4.0-5.0 on heterogeneous NPU/GPU hardware, covering non-NVIDIA backends.</p>
          </div>
          <div class="project-subgrid">
            <div>
              <span>Inference</span>
              <p>Designed quantization/sparsity algorithms and operator stacks compatible with dynamic LoRA and distributed FSDP/TP/EP architectures, supporting Seedance and Seedream production migrations from full BF16 to INT8/FP8, and then further to full INT4/MXFP4 online deployment.</p>
            </div>
            <div>
              <span>Training</span>
              <p>Designed hierarchical quantized training strategies and rebuilt the FSDP communication path around quantized weights to reduce distributed training communication overhead. This was the first production deployment of quantized training for ByteDance generative models.</p>
            </div>
          </div>
        </div>
      </article>

      <article class="project-feature-card">
        <div class="project-card__meta">AIGC Algorithm Model Optimization</div>
        <h3>Cache/MoE/Token Compression and Distillation</h3>
        <p>Developed cache reuse methods for diffusion and autoregressive generation, including timestep correction, offline policy search, online error rectification, and motion-aware token update scheduling.</p>
        <p>Built lightweight model optimization pipelines for DynamicRes, 2D/3D VAE compression, and distillation-oriented generative model deployment across image/video generation scenarios.</p>
        <p>The model-compression capability matrix further accelerates low-NFE step-distilled models by 35% to 50% at inference time.</p>
      </article>

      <article class="project-feature-card">
        <div class="project-card__meta">Edge-Cloud Collaborative Inference</div>
        <h3>Lightweight Foundation Models, Extreme Compression, and Efficient Engines</h3>
        <p><strong>Lightweight foundation models:</strong> developed SOTA lightweight LLM/VLM foundation models that are scheduled for open source release, the lightweight unified generation-editing model <a class="highlight-red" href="https://github.com/ByteVisionLab/DreamLite" target="_blank" rel="noopener noreferrer">DreamLite</a>, and the edge-cloud inference framework <a class="highlight-red" href="https://github.com/bytedance/Hybrid-SD" target="_blank" rel="noopener noreferrer">HybridSD</a>.</p>
        <p><strong>Extreme model compression:</strong> built ultra-low-bit quantization solutions for edge-side NPU/GPU platforms, achieving lossless inference at an equivalent 2-bit precision while supporting products used by billions of users.</p>
        <p><strong>Inference engine:</strong> participated in designing the ByteNN-LLM on-device LLM/AIGC inference engine architecture, where a 1+N on-device serving architecture enables a single foundation model to support multiple business needs, and delivered the industry's first PC-CUDA arbitrary-precision quantized inference solution.</p>
      </article>
    </div>
  </div>
</section>

<section id="skills" class="home-section home-section--skills">
  <div class="site-container">
    <div class="section-heading">
      <div class="section-eyebrow">06 / Skills</div>
      <h2>Skills</h2>
    </div>

    <div class="skill-matrix">
      <div class="skill-card">
        <span>Languages</span>
        <p>Python, C++, CUDA C/PTX</p>
      </div>
      <div class="skill-card">
        <span>MLSys / AIGC / LLM</span>
        <p>System-algorithm co-design, model compression, PTQ/QAT, sparse and quantized kernels, cache reuse, distributed inference/training optimization.</p>
      </div>
      <div class="skill-card">
        <span>Frameworks</span>
        <p>vLLM, CUTLASS, Triton, distributed serving/training stacks, heterogeneous NPU/GPU deployment toolchains.</p>
      </div>
      <div class="skill-card">
        <span>Kernels</span>
        <p>GEMM, Attention, Dense/Sparse operator tuning with MMA/WMMA and PTX assembly, quantized GEMM for compute- and memory-bound workloads.</p>
      </div>
    </div>
  </div>
</section>
