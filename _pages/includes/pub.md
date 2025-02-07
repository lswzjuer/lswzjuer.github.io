
# 📝 Publications 
## 📚 System Algorithm Co-design

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='images/abq.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ABQ-LLM: Arbitrary-Bit Quantized Inference Acceleration for Large Language Models](https://arxiv.org/pdf/2408.08554) \\
Chao Zeng \*, **Songwei Liu\***, Yusheng Xie\*, Hong Liu, Xiaojian Wang,
Miao Wei, Shu Yang, Fangmin Chen, Xing Mei †

[**Project**](https://github.com/bytedance/ABQ-LLM) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong> \| [![](https://img.shields.io/github/stars/bytedance/ABQ-LLM?style=social&label=Code+Stars)](https://github.com/bytedance/ABQ-LLM)


- 🚀 ABQ-LLM breaks quantization limits: Run LLMs at ANY bit-width you want, with REAL speedup!
- **Academic Impact**: It introduces hardware-aware dynamic quantization, enabling latency-optimal bit allocation across transformer layers without retraining.
- **Industry Impact**: It achieves a 1.6x inference speedup and 2.7x memory compression ratio compared to the industry's state-of-the-art SmoothQuant framework, with its kernel performance significantly surpassing CUTLASS-accelerated operators.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL XX</div><img src='images/gqsa.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GQSA: Group Quantization and Sparsity for Accelerating Large Language Model Inference](https://arxiv.org/pdf/2412.17560) \\
Chao Zeng\*, **Songwei Liu\***, Shu Yang, Fangmin Chen †, Xing Mei, Lean Fu
- 🚀 GQSA explores a group sparsity pattern beyond the conventional 2:4 sparsity, achieving a better trade-off between accuracy and speed through a combination of algorithmlevel optimizations and a customized software engine. 

- GQSA offers several advantages over the 2:4 sparsity technique, such as **Flexible and Adjustable Sparsity Rate**, **Higher Weight Compression Rate**, **Enhanced Compatibility with Various Quantization Methods**.

</div>
</div>


- `Arxiv 2023` [SparseByteNN: A Novel Mobile Inference Acceleration Framework Based on Fine-Grained Group Sparsity](https://arxiv.org/pdf/2310.19509), **Songwei Liu\***, Haitao Xu*, Yuyang Xu*,
Shuai Wang, Jiashi Li, Chenqian Yan, et al. 


## 📚 Model Compression 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW 2022</div><img src='images/esr.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Residual Local Feature Network for Efficient Super-Resolution](https://arxiv.org/pdf/2205.07514) \\
Fangyuan Kong\*, Mingxi Li\*, **Songwei Liu\***, Ding Liu, Jingwen He, Yang Bai, Fangmin Chen, Lean Fu


[**Project**](https://github.com/bytedance/RLFN) \| [![](https://img.shields.io/github/stars/bytedance/RLFN?style=social&label=Code+Stars)](https://github.com/bytedance/RLFN)

- 🚀 RLFN achieves state-of-the-art (SOTA) performance in lightweight super-resolution through innovative architectural design, advanced training strategies, and efficient model compression techniques!
- **Academic Impact**: It has emerged as a foundational baseline in the Efficient Super-Resolution (ESR) domain, driving advancements across the field.
- **Industry Impact**: It serves as the official baseline model for the [NITRE 2023 competition](https://openaccess.thecvf.com/content/CVPR2023W/NTIRE/papers/Li_NTIRE_2023_Challenge_on_Efficient_Super-Resolution_Methods_and_Results_CVPRW_2023_paper.pdf) and is applied to multiple product lines of ByteDance.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Arxiv 2024</div><img src='images/hybridsd.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Hybrid SD: Edge-Cloud Collaborative Inference for Stable Diffusion Models](https://www.semanticscholar.org/reader/5cb208b2f96320192d7c17e2970b3d93282a3371) \\
Chenqian Yan\*, **Songwei Liu\***, Hongjian Liu\*, Xurui Peng, Xiaojian Wang, Fangmin Chen, Lean Fu, Xing Mei.

[**Project**](https://github.com/bytedance/Hybrid-SD) \| [![](https://img.shields.io/github/stars/bytedance/Hybrid-SD?style=social&label=Code+Stars)](https://github.com/bytedance/Hybrid-SD) \| [![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-blue?label=Demo)](https://huggingface.co/cqyan)

- 🚀 Hybrid-SD has launched the industry's most performant lightweight models: VAE, SD1.5, and SDXL. Now available for deployment!

</div>
</div>


- ``Arxiv 2024`` [FoldGPT: Simple and Effective Large Language Model CompressionScheme](), **Songwei Liu\*** Chao Zeng\*, Lianqiang Li, Chenqian Yan, Lean Fu, Xing Mei, Fangmin Chen †.

- ``ACM-MM 2023`` [Unfolding once is enough: A deployment-friendly transformer unit for super-resolution](), Y Liu, H Dong, B Liang, **Songwei Liu**, Q Dong, K Chen, F Chen, L Fu, F Wang.

- ``Arxiv 2021`` [Mixsearch: Searching for domain generalized medical image segmentation architectures](), L Liu, Z Wen, **Songwei Liu**, HY Zhou, H Zhu, W Xie, L Shen, K Ma, Y Zheng.

- ``ICCA 2019`` [Binary convolutional neural network with high accuracy and compression rate](), **Songwei Liu**, Hongwei Zhu.