# vue-datepicker-taiwan

A date picker UI component displays year in Republic Era or Common Era.<br>
以 Vue3 + Typescript 開發，一個可顯示民國 / 西元年的日期選擇器 UI 套件
### [Demo](https://melodiehsu.github.io/vue-roc-date-picker/)

## Installation 安裝
```sh
npm i vue-datepicker-taiwan
```

## Usage 用法
```js
// main.ts
import TWDatePicker from 'vue-datepicker-taiwan';
import 'vue-datepicker-taiwan/dist/style.css';

app.use(TWDatePicker);
```

```js
// App.vue
<TWDatePicker
  v-model="value"
/>
```

## Attributes 屬性
- `modelValue`: 日期選擇器綁定值。
- `lang`: 語言選擇。
- `calendarYearType`: 年份類型選擇。
- `placeholder`: 佔位符文本。
- `type`: 日期選擇器的類型。
- `defaultValue`: 默認值。
- `disabled`: 是否禁用日期選擇器。
- `zIndex`: 元素的 z-index。
- `showClearButton`: 是否顯示清除按鈕。

| Name                | Description                                | Type                   | Accepted Values                     | Default Value |
|---------------------|--------------------------------------------|------------------------|-------------------------------------|---------------|
| `model-value / v-model`| Binding value.                        | String                 | Any valid string value               | ''            |
| `lang`              | Language selection.                   | String                 | 'en', 'zhTW'                        | 'zhTW'        |
| `calendarYearType`  | Year type selection.                  | String                 | 'CommonEra', 'RepublicEra'         | 'RepublicEra' |
| `placeholder`       | Placeholder text.                     | String                 | Any valid string value               | ''            |
| `type`              | Type of date picker.                 | String                 | 'year', 'month', 'date'             | 'date'        |
| `defaultValue`      | Default date of calendar.            | String                 | Valid date string (e.g., '2023-09-28') | ''            |
| `disabled`          | Whether the date picker is disabled. | Boolean                | `true` or `false`                   | false         |
| `zIndex`            | Z-index of the pop-up calendar.      | Number                 | Any valid positive integer          | 1             |
| `showClearButton`   | Whether to show the clear button.    | Boolean                | `true` or `false`                   | true          |
