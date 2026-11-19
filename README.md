# VisualJevBench

Official project website for **VisualJevBench**, a benchmark for evaluating adversarial robustness and visual reasoning in vision-language models.

The website is implemented as a lightweight, dependency-free static site and can be deployed directly through GitHub Pages.

## Project status

The current version is the initial website scaffold. It includes the project introduction, benchmark overview, qualitative example area, citation block, author list, and responsive layouts. Dataset statistics, experiment galleries, paper links, and Hugging Face resources will be added as they are finalized.

## Repository structure

```text
.
├── index.html      # Main project page
├── styles.css      # Visual design and responsive layout
├── app.js          # Small client-side interactions
├── .nojekyll       # GitHub Pages configuration
└── README.md       # Project documentation
```

## Run locally

No build step is required. Open `index.html` in a browser, or start a local server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deployment

1. Open the repository **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder.
4. Save and wait for the Pages deployment to finish.

## Information to add before the final release

- Official paper, arXiv, and project links
- Dataset size, task categories, and evaluated models
- Hugging Face dataset or model links
- Qualitative result images and failure-case galleries
- Reproducibility instructions and evaluation scripts
- Final BibTeX entry and contact email

## Authors

Li Zeng · Yeqi Zeng · Hengkai Liang · Shiguo Wang · Meng Xie · Zeyu Ye · Jinheng Zhang · Xianlong Wang · Ziqi Zhou · Hangtao Zhang
