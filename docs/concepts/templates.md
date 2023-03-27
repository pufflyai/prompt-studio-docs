# Templates

A template allows you to create variations of prompts from data.

When creating a prompt you can make use of templates to quickly insert data at specific locations, or create large
numbers of prompts from a [set](./sets).

## Syntax

PromptStudio uses [Mustache](https://mustache.github.io/) as a template language. Below are a few examples of its usage:

```md title="template"
Hello {{my_var}}!
```

```json title="variable.json"
{
  "my_var": "world"
}
```

The following prompt will be generated:

```
Hello world!
```

### Assigning sets to a variable

You can also assign a set to a variable:

```json
{
  "my_var": ["world", "mars"]
}
```

The following prompt will be generated:

```
Hello world, mars!
```

### Generating a prompt per item in a set

Sometimes you want to compare completions over large numbers of prompts. With Prompt Studio you can do that by assigning a set to a variable and selecting "Create completion for each item".

This will create a separate prompt for each item in the set:

Given the template:

```md title="template"
Hello {{my_var}}!
```

And the variable

```json title="variable.json"
{
  "my_var": ["world", "mars"]
}
```

The following prompts will be generated:

```md title="prompt1"
Hello world, world!
```

```md title="prompt2"
Hello world, mars!
```

### Loops

You can also loop over your data within a single prompt, given the template below:

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

```md title="prompt"
Hello

- Moomin
- Snufkin
- Groke
```

:::info
You can assign a set to a variable in the prompt editor
:::

### Comments

You can also write comments in your prompt templates.

```
{{! this is a multiline comment and will not
be part of any prompt created from this template
}}
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
