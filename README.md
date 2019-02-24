# hexo-deployer-zeronet

Note that hexo-generator-json-content confict with zeronet

You should use a different config.yml for zeronet and use relative links.

So, the commands would be:

```bash
hexo generate --config .\config_zeronet.yml
hexo deploy --config .\config_zeronet.yml
```

You should always use relative links in your source files

## Troubleshooting

- `Error: EPERM: operation not permitted, unlink 'D:\ZeroNet\data\12q9YNb5oJ331nTjUxWefV9W2EXpMu8RWi\2019'`
    - Exit zeronet and retry

