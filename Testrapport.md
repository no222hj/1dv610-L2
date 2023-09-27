# Testrapport

This project were tested using manual test cases where input and output were recorded in this report.

# Case 1, Instantiate SimpleCharts with datasets.

## 1.1 Instantiation with improper dataset (argument)

Make sure class SimpleCharts can not be instantiated with improper datasets.

### 1.1.1 Instantiation with no dataset

When instantiated without dataset, simplecharts should throw an error with message.

input: 

```
const simpleCharts = new SimpleCharts()
```

output: 

```
Error: "SimpleCharts: no dataset"
```

### 1.1.2 Instantiation with dataset of other type than arrray

When instantiated with other type than array as dataset, simplecharts should throw an error with message.

input: 

```
const dataSet = 1

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: dataset formatting error"
```

### 1.1.3 Instantiation with dataset of empty array

When instantiated with empty array as dataset, simplecharts should throw an error with message.

input: 

```
const dataSet = []

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: dataset formatting error"
```
### 1.1.4 Instantiation with empty datapoint

When instantiated with empty datapoint, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint value has to be a positive number"
```
### 1.1.5 Instantiation with single datapoint

When instantiated with single datapoint, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 'One', value: 1, color: '#219C90'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: dataset requires at least two datapoints"
```

### 1.1.6 Instantiation with datapoint without argument key

When instantiated with datapoint missing argument key, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {value: 1, color: '#219C90'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint argument required and has to be a string"
```
### 1.1.7 Instantiation with datapoint where argument value is not type string
When instantiated with datapoint argument value of other type than string, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 1, value: 1, color: '#219C90'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint argument required and has to be a string"
```

### 1.1.8 Instantiation with datapoint without value key

When instantiated with datapoint missing value key, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 'one', color: '#219C90'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint value required and has to be a positive number"
```
### 1.1.9 Instantiation with datapoint where value is not type number
When instantiated with datapoint value of other type than string, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 'one', value: [], color: '#219C90'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint value required and has to be a positive number"
```
### 1.1.10 Instantiation with datapoint without color key

When instantiated with datapoint missing color key, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 'one', value: 1}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint color required and has to be a string in hex color format"
```
### 1.1.11 Instantiation with datapoint where color value is not type string
When instantiated with datapoint color value of other type than string, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 'one', value: [], color: 1}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint color required and has to be a string in hex color format"
```
### 1.1.12 Instantiation with datapoint where color value is string but not in hex color format
When instantiated with datapoint color value of type string but not in hex format, simplecharts should throw an error with message.

input: 

```
const dataSet = [
  {argument: 'One', value: 1, color: 'blue'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
Error: "SimpleCharts: datapoint color required and has to be a string in hex color format"
```
## 1.2 Instantiation with proper dataset

Make sure class SimpleCharts can not be instantiated with improper datasets.

### 1.2.1 Instantiation with dataset formatted according to ducumentation. Contains two datapoints.
When instantiated with properly formatted dataset no error is thrown and an instace of object is created.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

simpleCharts instantiated, no errors thrown.

```
typeof dataSet
```
return 'object'

### 1.2.2 Instantiation with dataset formatted according to ducumentation. Contains several datapoints.
When instantiated with properly formatted dataset no error is thrown and an instace of object is created.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'},
  {argument: 'Three', value: 3, color: '#F26B38'},
  {argument: 'Four', value: 4, color: '#F26B38'},
  {argument: 'Five', value: 5, color: '#F26B38'},
  {argument: 'Six', value: 6, color: '#F26B38'},
  {argument: 'Seven', value: 7, color: '#F26B38'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

simpleCharts instantiated, no errors thrown.

```
typeof dataSet
```
returns 'object'

***

## 1.3 Instantiation of simpleCharts with improper size options

Make sure simpleCharts can not be instantiated with improper size options. The size option key has to be an object with keys height and width. The value of these has to be positive numbers.

### 1.3.1 Instantiation of simpleCharts with size key value as other type than object
When instantiated with improperly formatted options object, and error with corresponding message is thrown.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const chartOptions = {
  size: 2
}

const simpleCharts = new SimpleCharts(dataSet, chartOptions)
```

output:

```
Error: "simpleCharts option error: size has to be an object with width and height as positive numbers"
```

### 1.3.2 Instantiation of simpleCharts with size key value as empty object
When instantiated with improperly formatted options object, and error with corresponding message is thrown.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const chartOptions = {
  size: {}
}

const simpleCharts = new SimpleCharts(dataSet, chartOptions)
```

output:

```
Error: "simpleCharts option error: size has to be an object with width and height as positive numbers"
```

### 1.3.3 Instantiation of simpleCharts with height/width value of other type than positive number
When instantiated with improperly formatted options object, and error with corresponding message is thrown.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const chartOptions = {
  size: {
    width: 'string',
    height: 400
  },
}

const simpleCharts = new SimpleCharts(dataSet, chartOptions)
```

output:

```
Error: "simpleCharts option error: size has to be an object with width and height as positive numbers"
```

### 1.3.4 Instantiation of simpleCharts with height/width value of other type than positive number
When instantiated with improperly formatted options object, and error with corresponding message is thrown.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const chartOptions = {
  size: {
    width: 400,
    height: '400'
  },
}

const simpleCharts = new SimpleCharts(dataSet, chartOptions)
```

output:

```
Error: "simpleCharts option error: size has to be an object with width and height as positive numbers"
```

### 1.3.4 Instantiation of simpleCharts with height/width value of other type than positive number
When instantiated with improperly formatted options object, and error with corresponding message is thrown.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const chartOptions = {
  size: {
    width: -400,
    height: 400
  },
}

const simpleCharts = new SimpleCharts(dataSet, chartOptions)
```

output:

```
Error: "simpleCharts option error: size has to be an object with width and height as positive numbers"
```

## 1.4 Instantiation of simpleCharts with proper size options

### 1.4.1 Instatiation with no size options
Instantiation with no size options should set size width and height to dafault values 400.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const simpleCharts = new SimpleCharts(dataSet)
```

output: 

```
{
    "size": {
        "width": 400,
        "height": 400
    }
}
```

### 1.4.2 Instatiation with size options object containing width and height as positive numbers

Instantiation with size options object containing width and height as positive numbers should set size width and height to corresponding values.

input: 

```
const dataSet = [
  {argument: 'One', value: 2, color: '#219C90'},
  {argument: 'Two', value: 2, color: '#EFC958'}
]

const chartOptions = {
  size: {
    width: 500,
    height: 600
  }
}

const simpleCharts = new SimpleCharts(dataSet, chartOptions)
```

output: 

```
{
    "size": {
        "width": 500,
        "height": 600
    }
}
```

***

# 2 Plotting of pie chart

## 2.1 Plotting of pie chart with varying dataset

### 2.1.1 Plotting of pie chart with dataset containing two datapoints, each with value 1

Plotting of pie chart with dataset containing two datapoints, each with value 1 should return an svg with two pie slices, each with value 1 and color corresponding to the color of the datapoint in the dataset. The slices should be plotted in dataset order starting from 90 degrees. Each slice should take up its corresponding percent of the pie.

input: 

```
const dataSet = [
  {argument: 'One', value: 1, color: '#219C90'},
  {argument: 'Two', value: 1, color: '#EFC958'}
]

const simpleCharts = new SimpleCharts(dataSet)
const pieChart = simpleCharts.pieChart()
```

output: 

The pie chart svg is plotted with proper slices and properties.

![pie chart with two slices](./resources/tests/pie-chart/pie-chart-two-data.svg)

