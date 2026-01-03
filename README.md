# HAQAGen: Histogram Assisted Quality Aware Generative Model for Resolution Invariant NIR Image Colorization

This repository accompanies the paper:

**Histogram Assisted Quality Aware Generative Model for Resolution Invariant NIR Image Colorization**  
Accepted at **IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2026**

**Authors:**  
Abhinav Attri*, Rajeev Ranjan Dwivedi*, Samiran Das, Vinod Kumar Kurmi  
Indian Institute of Science Education and Research (IISER) Bhopal, India  
(* equal contribution)

---

## Abstract

Near-infrared (NIR) imaging is widely used in low-light and adverse conditions due to its robustness to illumination variations. However, NIR images lack chromatic information, making them difficult for human interpretation. NIR-to-RGB colorization is a challenging and ill-posed problem due to spectral ambiguity, texture–color trade-offs, and resolution mismatches between training and deployment settings.

We present **HAQAGen**, a unified generative framework for **resolution-invariant NIR-to-RGB colorization** that balances chromatic realism with structural fidelity. Our approach introduces:  
(1) a **histogram-assisted quality-aware reconstruction loss** that aligns global color statistics using differentiable histogram matching, perceptual similarity, and feature-based texture supervision;  
(2) **local hue–saturation priors** injected through Spatially Adaptive Denormalization (SPADE) to stabilize chromatic reconstruction; and  
(3) a **texture-aware Mamba-based backbone** that preserves fine structural details.

To address resolution sensitivity, we further propose an **adaptive-resolution inference strategy** that enables high-resolution colorization without global resizing, preserving texture continuity and avoiding blur artifacts.

Extensive experiments on **FANVID, OMSIV, VCIP2020, and RGB2NIR** demonstrate that HAQAGen consistently outperforms state-of-the-art methods across perceptual and distortion-based metrics, producing sharper textures and more natural color distributions. These results establish HAQAGen as a scalable and effective solution for NIR-to-RGB translation across diverse imaging scenarios.

---

## Key Contributions

- **Histogram-assisted reconstruction loss** that enforces global color realism while maintaining texture fidelity.
- **HSV-SPADE conditioning** to inject local chromatic priors and reduce hue ambiguity.
- **Texture-aware generative modeling** using a Mamba-based backbone.
- **Resolution-invariant inference** via adaptive patch-based processing, enabling native-resolution deployment.
- Comprehensive evaluation across multiple NIR-RGB benchmarks with consistent gains over prior methods.

---

## Datasets Used

HAQAGen is evaluated on four publicly available datasets covering diverse scenes and resolutions:

- **VCIP2020**: Indoor and outdoor scenes with aligned NIR-RGB pairs.
- **FANVID**: High-resolution face and urban imagery.
- **OMSIV**: Outdoor surveillance imagery.
- **RGB2NIR**: Mixed scenes with higher bit-depth NIR images.

Detailed dataset statistics and splits are provided in the paper.

---

## Results Summary

HAQAGen achieves:
- Improved **PSNR** and **SSIM** over prior work.
- Significantly lower **LPIPS**, indicating better perceptual quality.
- Visually sharper textures and more natural chromatic distributions, especially at high resolutions.

Qualitative results show that HAQAGen avoids the over-smoothing and color bleeding commonly observed in resize-based inference pipelines.

---

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{attri2026haqagen,
  title={Histogram Assisted Quality Aware Generative Model for Resolution Invariant NIR Image Colorization},
  author={Attri, Abhinav and Dwivedi, Rajeev Ranjan and Das, Samiran and Kurmi, Vinod Kumar},
  booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  year={2026}
}
