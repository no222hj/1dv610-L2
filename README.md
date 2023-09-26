# SimpleCharts
A tool to generate simple charts in svg, out of custom datasets. 

# How it works!

SimpleCharts generates a set of methods for creating pie-, bar-, doughnut- and linecharts in svg with custom data. The data is sent in the form of an array of objects. It is also possible to include a set of options for style. The components of the charts are made up of individual svg elements. This makes it possible to style them separately with css.

# Get started! 

1. Import SimpleCharts into your project from the path of the module:

```
    import { SimpleCharts } from 'path'
```

1. Set up your dataset (required) and configurations (optional):

```
    const dataset = [
      {argument: 'One', value: 2, color: '#32CD32'},
      {argument: 'Two', value: 4, color: '#A9A9A9'},
      {argument: 'Three', value: 1, color: '#A52A2A'}
    ]
```

3. Create and instance of SimpleCharts:

```
    const simpleCharts = new SimpleCharts(dataset, chartOptions)
```

   Now you are good to go!

# Data
The input data is provided as an array of objects, where each object represent a datapoint. The key-value pairs are: 

| Key | Value |
| -------- | ------- |
| argument |  A string, represent the name of the datapoint |
| value | A positive integer (with or without decimals), represent the value of the datapoint |
| color    | A string representing a hexadecimal color, this is the color of the datapoint in the visualization |''

Example:

```
[
  {argument: 'One', value: 2, color: '#32CD32'},
  {argument: 'Two', value: 4, color: '#A9A9A9'},
  {argument: 'Three', value: 1, color: '#A52A2A'}
]
```

# Configuration

The configuration is provided as an object. To include these are optional and all of them have a default value. 

# Usage

The different kinds of charts are generated using a corresponding method of SimpleCharts, which return the genereated svg-element.

## Pie chart

A pie chart is genereated and returned by plotPieChart()
```
    const pieChart = simpleCharts.plotPieChart()
```
Each slice of the pie display on hover the corresponding datapoints argument, value and percent of the total dataset value.

<svg width="400" height="400"><g><path d="M200,200 L199.99999999999997,50 A150,150, 0 0,1 306.0660171779821,93.93398282201785 Z" fill="#219C90" stroke="white"><title>One: 2 
 12.5%</title></path><path d="M200,200 L306.0660171779821,93.93398282201785 A150,150, 0 0,1 306.06601717798213,306.0660171779821 Z" fill="#E9B824" stroke="white"><title>Two: 4 
 25%</title></path><path d="M200,200 L306.06601717798213,306.0660171779821 A150,150, 0 0,1 50,200.00000000000006 Z" fill="#AE445A" stroke="white"><title>Three: 6 
 37.5%</title></path><path d="M200,200 L50,200.00000000000006 A150,150, 0 0,1 199.99999999999994,50 Z" fill="#D83F31" stroke="white"><title>Four: 4 
 25%</title></path><path d="M200, 200 m-150, 0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0" fill="none" stroke="black"></path></g></svg>






