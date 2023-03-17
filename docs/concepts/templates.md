# Templates

A template allows you to create variations of prompts from data.

When creating a prompt you can make use of templates to quickly insert data at specific locations, or create large
numbers of prompts from a [set](./sets).

## Syntax

PromptStudio uses [Mustache](https://mustache.github.io/) as a template language. Below are a few examples of its usage:

Given the template:

```
Hello {{my_var}}!
```

And the variable Object:

```json
{
  "my_var": "world"
}
```

The following prompt will be generated:

```
Hello world!
```

### Loops

You can also loop over your data, given the template below:

```
Hello

{{#names}}
- {{.}}
{{/names}}
```

And the variables:

```json
{
  "names": ["Moomin", "Snufkin", "Groke"]
}
```

The following prompt will be generated:

```
Hello

- Moomin
- Snufkin
- Groke
```

## Usecases

This can be useful in different scenarios.

### Few Shot Prompting

In few-shot prompting you provide a set of examples as part of your prompt. In some scenarios this can produce more
accurate results.

```md
Is the following sentence positive or negative?

Examples:

This is awesome! // Positive
This is bad! // Negative
Wow that movie was rad! // Positive

Sentence:

What a horrible show! //
```

Given the additional information from the example above, the model would complete the prompt with

```md
Negative
```

With a template we can extract this type of data out of the prompt:

```mustache
Is the following sentence positive or negative?

Examples:

{{#examples}}
{{.}}
{{/examples}}

Sentence:

{{userQuery}} //
```

Now you can provide different sets of examples and test the prompt on different types of queries and easily compare the
results between runs.
