# Reflektion 1dv610 - L2

## Kodkvalitetskrav

### Kapitel 2, Meaningful Names

| Namn och förklaring | Reflektion och regler |
|----------|----------|
| **SimpleCharts** Main class for the module| **Use Pronounceable Names** |
|| The name SimpleCharts is not a short for anything and easy to pronounce, in relation to the definition in the book (since it´s made up of real words). |
||  **Class Names** |
|| The class name SimpleCharts is a name and adheres to this book title. The name is plural but since it is a tool that generates several types of charts it might be suitable. |
|| **Use Intention-Revealing Names** |
|| The name SimpleCharts is intention revealing to an extent. It does tell the reader that it has something to do with charts  but the "Simple" part might spark confusion since it is a subjective term. One could argue that a name with even more clarity and revealing intent should be used. |
| **plotPieChart()** Method that generate and return a pie chart | **Avoid Disinformation** |
|| The method name plotPieChart is not disinformative since it does what it says. More information could be added to the name to make it even more clear what the method does, the return type for example, but it is not disinformative. Considering the context though, this might be unnecessary. |
|| **Pick One Word Per Concept** |
|| The name "plot" is consistently used to describe a single abstract concept throughout the method names. |
| **chartData** | ** |
|| **Use Domain Names** |
|| The name "chartData" . |
| **plotBarChart()** Method that generate and return a bar chart | **Method Names** |
|| The method name plotBarChart is a verb phrase and adheres to this concept. |
|| **Use Domain Names** |
|| The name "plotBarChart()" are intention-revealing and so on but could be clearer, using domain names. That the method generates a bar chart is arguably quite clear. However the name could also make it clear that the method in question returns a svg.|
| **editOptions(options)** Edits the options for the class | **Pick one word per concept** |
|| The name part "edit" might be counted as using different words for the same concept since its function is quite the same as a setter. I do think it is valid in this case though but another name might be better with "set" included to really state what it does. setUpdateOptions(options) for example. This feel a bit over the top however. |



#### Reflection on Meaningful Names

The chapter "Meaningful names" makes me realize how little thought I've spent on naming in programming, although a big part of the content is quite obvious. To use names that "reveal intention", aren't disinformative and so on might go without saying. However to reflect on the matter might be needed in order to take the knowledge into practice. Analyzing my general naming strategy in the past, many of the books concepts have also been mine, but at the same time I've been mighty inconsistent. I've tried to find somewhat descriptive and clear names. Class names as nouns, method names as verbs or verb phrases. Tried not to "be cute", used searchable names and so on. At the same time though, I've many times done the exact opposite and used names that are not clear, disinformative and so on. This often happens when I get really into solving a problem for example. That's why I find this chapter, and this reflection useful. Since it shows the importance and benefits of proper naming. 

### Kapitel 3, Functions

| Namn och förklaring | Reflektion och regler |
|----------|----------|
| **#setData(data)** Validates and set data.| **Do One Thing**| 
|| This method validates and sets the data for the module. Instead of doing only one thing it does several. The method should be divided into several in order to adhere to this title. The setter method and several helper methods would be proficient. | |
|| **Error Handling Is One Thing** |
|| According to this concept error handling should be done in a function for just that. This means the exception throwing part of the method should be implemented in a separate method for just that. |
|| **Have no side effects** |
|| Since this method is a setter, the fact that it sets data is no side-effect. Validation and throwing exceptions however, could be seen as a side effect since these effects are "hidden". Hidden in the sense that the name does not imply any of this, but reading the code itself it's not hidden in any way. This would be corrected by splitting the method into smaller methods stated above (using proper names ofcourse)|
|| **Prefer Exceptions to Returning Error Codes** |
|| The method throws exceptions instead of returning error codes, which means it adheres to the concept. |
|| **Function argument** |
|| The method has only one parameter, i.e. use only one argument (monadic). Since the lower the number of arguments the better, this method complies with the book in a good way. Having zero arguments would have been more desirable but since the method is a setter, the need for one argument is evident. |
|| **Command Query Separation** |
|| Even though cluttered and so on it does adhere to this concept. The method does not return anything, only set data, and therefore only does a "command". |
| **#setOptions(options)** Validates, throws errors and sets options.| **Do one thing** |
|| This method validates, throws errors and sets the data for the module. Instead of doing only one thing it does several. The method should be divided into several in order to adhere to this title. |
|| **Have no side effects** |
|| The method alters the state of the chartData object, this however is expected due to the name set. What's not expected though is the validation and exceptions thrown. This could be viewed as as a side effect since the method name implies none of this. |
|| This method share a lot with the previous and the comments there apply for them both. |
| **createLineChart()** Generate a svg with a line chart and returns it | **Small!** |
|| The method is quite long and could easily be divided into smaller methods. |
|| **Do one thing** |
|| The method generates a svg with a line chart and returns it. This can be considered as one thing. Talking about the books thought of "one thing" though it does much more. This would be taken care of when dividing into smaller methods. |
|| **One Level of Abstraction per Function** |
|| The method name implies a higher abstraction level but has several levels of abstraction. The calling of methods and loops together with element creation does not comply with the concept. This can be edited by keeping abstraction levels in mind when refactoring the method into smaller ones as suggested above. The abstraction levels have to be monitored in that case. |
|| **Use Descriptive Names** |
|| The method generates a svg with a line chart and returns it. The name is in my opinion quite descriptive, although could be even more descriptive. I would say it is sufficient in this context. |
| **createPieChart()** renders the svg pie chart | **Small!** |
|| The method is not absurdly lengthy in terms of lines of code but are overly complex and does several things. It should be destructed into smaller methods. |
|| **Do One Thing** |
|| As stated before this method is doing multiple things and should be divided into smaller scoped methods. |
|| **Have no side effects** |
|| The method does not alter the state of any object in the class and have no real side effects. This is adhering to the concept. |
| **generateAxisY()** Generates the y-axis for the chart | **Don't Repeat Yourself** |
|| There is a lot that could be said regarding this method however much of it is the same as stated above for the other methods. One observation not made earlier though is that this method indirectly violates the "DRY" principle. Both class LineChart and BarChart have similar methods doing almost the same thing. The code should be refactored so parts of it could be used by both classes in the form of a separate method. This goes for several other methods in my code as well.|


There is a lot more that could be said about the methods. This would be to repeat myself though. Let's adhere to the DRY principle somewhere at least!


#### Reflection on Functions

The "Functions" chapter do just like "Meaningful Names" deliver a fair share of concepts i try to implement in my construction of functions, and agree with. "Do not repeat", to throw exceptions instead of returning error codes, avoid side effects and keep the number of arguments as low as possible. This is not to say that i allways succeed, but i try.

Other concepts though are ones i've never really though about, but are quite interesting. The separation of abstraction for example is quite new to me (and even a bit hard to grasp when first reading about it), but the benefits are very clear. I find it hard to implement, but the clarity it brings is clearly a benefit. 

To "Do One Thing" is also a interesting and possibly benefitial concept although what one "thing" is subjective, even the book has a hard time to define it. If this concept is taken to the extreme i imagine it would raise the readability, but at the same time lessen the understandability with an excessive number of functions. Me myself hovewer are on the other end of the spectrum often times which in my opinion has the opposite effect. The best might be to meet in the middle. My views on keeping function small are quite the same. Doing it to an extent is clearly benefitial, but to overdo it might make the code more complex, and harder to understand. 

## Reflektion on code quality


My experience of my own code quality is rather unclear. Before this course I found the code quality of my projects to be high in general and still do so to an extent. At the same time it has made me question the level of quality I manage to produce and many of the concepts in the book are new to me. My view has always been that code differs from other text in that it is not mainly meant to be read, but to be executed. This has lead me to believe that it is okay with a lower level of readability compared to other forms of text media. The view of the book is quite opposite and code is compared to "well-written prose". It has opened my eyes a fair bit and at least made me think about the matter. I do find it reasonable to strive for read- and understandability, more so than i have done in the past.


As mentioned before one of the problems I have regarding code quality is to keep it high throughout a whole project. In my opinion the quality starts out high, but as the size and complexity level grows, the quality deteriorates. Doing this assignment is a similar experience, but now I have more tools to reflect on the matter and by that hopefully improve.
