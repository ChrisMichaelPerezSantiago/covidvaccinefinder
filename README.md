# 🦠 😷🔬💉 Covid Vaccine Finder

> Find a COVID-19 vaccine near you, data provided by [VaccineFinder](https://www.vaccines.gov/)

---

## US states available to search by zipcode

`AA, AE, AK', 'AL', 'AP', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL','FM', 'GA', 'GU', 'HI', 'IA', 'ID','IL', 'IN', 'KS', 'KY', ' LA', 'MA', 'MD', 'ME', 'MH','MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM','NV','NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'PW', 'RI', 'SC', 'SD', 'TN','TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'`

# 📖 Example

## `options` properties

- [x] `zipcode`:

```
  string | length: {max: 5, min: 5}
```

- [x] `radiusValue`:

```
 1000_MILES, 50_MILES, 25_MILES, 10_MILES, 5_MILES
```

- [x] `vaccineType`:

```
  pfizer1  // Pfizer-BioNTech (age 5-11)
  pfizer2  // Pfizer-BioNTech (age 12+)
  moderna  // Moderna (age 18+)
  Johnson  // Johnson & Johnson/Janssen (age 18+)
```

- [x] `appointment`: **Boolean**

# search([options])

```js
const options = {
  zipcode: "00729",
  radiusValue: "50_MILES",
  vaccineType: "moderna",
  appointment: true,
};
const result = await search(options);
```

# getLocationData([guid])

```js
const guid = "55f2d9d0-b0fd-411e-8b7b-d83060b569f5";
const result = await getLocationData(guid);
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2021 [Covid Vaccine Finder](https://github.com/ChrisMichaelPerezSantiago/covidvaccinefinder).
