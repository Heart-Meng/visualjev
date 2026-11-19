# VisualJevBench Project Page

VisualJevBench is a benchmark for evaluating adversarial robustness and visual reasoning in vision-language models.

This repository contains a lightweight static website. It requires no npm dependencies, build tools, backend, or API key. All paths are relative and work with the GitHub Pages project path `/visualjev/`.

## Deployment

1. Push `index.html`, `style.css`, `site.js`, `assets/`, and `.nojekyll` to the root of the `main` branch.
2. Open **GitHub Repository → Settings → Pages**.
3. Select **Deploy from a branch**, choose `main`, and select `/ (root)`.
4. After deployment, visit <https://heart-meng.github.io/visualjev/>.

The first deployment may take a few minutes.

## Local preview

Run the following command in this directory:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## Authors

Li Zeng · Yeqi Zeng · Hengkai Liang · Shiguo Wang · Meng Xie · Zeyu Ye · Jinheng Zhang · Xianlong Wang · Ziqi Zhou · Hangtao Zhang

## Contact

For questions, collaboration, or release-related inquiries, please contact [Meng Xie](mailto:xiemengl595@163.com).

## Before the final release

- Add the public paper PDF or arXiv link.
- Replace the disabled paper button with the final paper URL.
- Add the dataset and Hugging Face links, license, image sources, and usage terms.
- Add data splits, evaluation thresholds, complete result tables, and reproduction commands.
- Add the final BibTeX entry after the author list and publication status are confirmed.
- Publish a cleaned version of the experiment code without credentials, private paths, or caches.

## Repository files

- `index.html`: page content, resource links, authors, and benchmark values
- `style.css`: responsive layout and visual styling
- `site.js`: question-type tab interaction
- `assets/overview.png`: benchmark overview figure

The current page is a website scaffold. It does not provide online model inference.
