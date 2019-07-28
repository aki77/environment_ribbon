# Environment ribbon

![Image from Gyazo](https://i.gyazo.com/3e430629694c81c67cb32480bdb8c17c.png)

# Settings example

```json
[
  {
    "url": "https://staging.test/*",
    "name": "staging",
    "color": "#6f42c1"
  },
  {
    "url": "https://production.test/*",
    "name": "production",
    "color": "#d73a49"
  },
  {
    "url": "https://*.aws.amazon.com/*",
    "name": "production",
    "selector": ".nav-elt-label[title^=\"prod-account\"]",
    "color": "#d73a49"
  }
]
```

![Image from Gyazo](https://i.gyazo.com/37434ee41a2df1cdfef9771e7f11cd4b.png)
