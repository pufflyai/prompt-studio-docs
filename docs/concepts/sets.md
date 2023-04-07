import story_types from "../images/sets/story_types_set.png";

# Sets

A **set** is a collection of data that you can reuse across your prompts. This could be test queries, keywords for a specific narration style or examples for few shot prompting.

# Types of sets

As of today, PromptStudio allows a set to be an **array of strings** or a **file**.

## Set of Text variables

Let's say you want to create a set of story types

<img src={story_types} alt="story_types" width="50%"/>

The following set could be used in combination with a prompt to generate a story in a specific style. To do that, assign
the set to the `storyType` variable in the editor.

```text title="prompt template"
Tell me a {{storyType}} story.
```

By default the set will be applied inline:

```text
Tell me a horror, fantasy, comedy story.
```

You can also generate different prompts for each item in the set by selecting the option **Create Prompt for each**:

```text
Tell me a horror story.
```

```text
Tell me a fantasy story.
```

```text
Tell me a comedy story.
```

## Set of Files
