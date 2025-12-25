# Digital Twin Consortium - Singapore

Website for the Digital Twin Consortium Singapore Regional Branch.

## Quick Start

```bash
# Install dependencies
pip install -r toolkit/requirements.txt

# Build the site
python toolkit/build.py

# Preview locally
python -m http.server -d site 8000
```

Then open http://localhost:8000

## Project Structure

- `content/` - Site content (pages, events, configuration)
- `assets/` - CSS, JavaScript, and images
- `toolkit/` - Build system and templates
- `site/` - Generated output (gitignored)

## Documentation

- [Setup Status](toolkit/doc/setup_status.md) - Implementation progress
- [Specification](toolkit/doc/setup_spec.md) - Full technical specification
- [Agent Quickstart](toolkit/doc/QUICKSTART_AGENT.md) - Quick reference for AI agents

## Regional Branch Organizer

[Axomem](https://axomem.io) - Singapore

## License

Part of the [Digital Twin Consortium](https://www.digitaltwinconsortium.org) Regional Branch program.
