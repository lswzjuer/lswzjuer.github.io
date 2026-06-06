# 🎖 Projects and Skills

## Key Project Experience

### AIGC System-Algorithm Co-design

#### Inference

- Led algorithm optimization and software-hardware co-optimization for Seedance 1.0-2.0 and Seedream 4.0-5.0 on **heterogeneous NPU/GPU** hardware, covering all non-NVIDIA backends.
- Designed an INT8 PTQ algorithm and operator stack compatible with dynamic LoRA and distributed FSDP/TP/EP settings, enabling efficient BF16-to-INT8 service migration for Seedance / Seedream workloads.
- Pushed diffusion quantization toward INT4 by combining smoothing transforms, efficient online computation, and timestep-aware cumulative-error compensation.
- Deployed SparseAttention for AIGC generation through cache-mask reuse, online block-index tuning, head reordering for load balance, and segmented online permutation.

#### Training

- Designed hierarchical quantized training strategies for Seedance / Seedream-style AIGC models, balancing forward/backward precision and acceleration across **heterogeneous NPU/GPU** and L20-class devices.
- Rebuilt the FSDP communication path around quantized weights, using quantized all-gather and direct full-weight quantized computation to reduce communication overhead.
- Applied quantized training acceleration to high-traffic image/video generation workloads, improving training and serving efficiency under production constraints.

### AIGC Algorithm Model Optimization

- Developed cache reuse methods for diffusion and autoregressive generation, including timestep correction, offline policy search, online error rectification, and motion-aware token update scheduling.
- Built lightweight model optimization pipelines for DynamicRes, 2D/3D VAE compression, and distillation-oriented generative model deployment.
- Supported production deployment of efficient Seedance / Seedream variants and lightweight VAE models across image/video generation scenarios.

### Edge-Cloud Collaborative Inference

- Designed the ByteNN-LLM on-device inference engine architecture and CUDA backend, supporting multi-business deployment with dynamic LoRA, compact LLMs, and arbitrary-bit quantized matrix multiplication.
- Built edge-cloud collaborative inference paths for AIGC and LLM workloads, coordinating on-device generation/editing with cloud-side large-model capability under latency, memory, and cost constraints.
- Core contributor to the Lighten inference engine and initial Lighten-LLM cloud inference stack, optimizing operator performance and tooling for more than 30 production businesses.
- Supported deployment across TikTok, Douyin, Xigua, Fanqie Novel, Seed-VLM, and CV model scenarios, covering effects, search, translation, commercialization, and multimodal inference.

## Technical Skills

- Languages: Python, C++, CUDA C/PTX
- MLSys/AIGC/LLM: system-algorithm co-design; model compression; PTQ/QAT; sparse and quantized kernels; cache reuse; distributed inference/training optimization.
- Kernels and frameworks: GEMM, Attention, Dense/Sparse operator tuning with **MMA/WMMA and PTX assembly**; quantized GEMM for compute- and memory-bound workloads; vLLM, CUTLASS, Triton.
