import story_types from "../images/sets/story_types_set.png";
import create_set_files from "../images/files/create_set_files.png"
import moverBot_template from "../images/files/moverBot_template.png"
import file_set_prompt_preview from "../images/files/file_set_prompt_preview.png"
import file_set_completion from "../images/files/file_set_completion.png"
import collection_of_files from "../images/files/collection_of_files.png"

# Lists

A **list** is a collection of data that you can reuse across your prompts. This could be test queries, keywords for a specific narration style or examples for few shot prompting.

# Types of lists

As of today, PromptStudio allows a list to be an **array of strings** or a **list of files**.

## List of Text variables

Let's say you want to create a list of story types

<img src={story_types} alt="story_types" width="50%"/>

The following list could be used in combination with a prompt to generate a story in a specific style. To do that, assign
the list to the `storyType` variable in the editor.

```text title="prompt template"
Tell me a {{storyType}} story.
```

By default the list will be applied inline:

```text
Tell me a horror, fantasy, comedy story.
```

You can also generate different prompts for each item in the list by selecting the option **Create Prompt for each**:

```text
Tell me a horror story.
```

```text
Tell me a fantasy story.
```

```text
Tell me a comedy story.
```

## List of Files

Just like we created our file above, we can create a list of files and pass that list to the template. Let's explore an example.
Let's say we have content scattered in different files and we want to generate a summary of the information that is in all those files to have all the information in one place.

First, let's create a folder of our files:

<img src={collection_of_files} alt="collection_of_files" width="50%"/>

Let's assume we have a robot called MoverBot, and the folder contains information about this robot:

- The Overview file gives a general definition of what the MoverBot does
- The Design file is about how the robot was designed
- The Testing file is about the process by which the robot was tested

Let's create a list of these files:

<img src={create_set_files} alt="create_set_files"  width="50%"/>

Now, let's write our template:

<img src={moverBot_template} alt="moverBot_template"  />

So now, our generated prompt looks something like this:

<img src={file_set_prompt_preview} alt="file_set_prompt_preview" width="50%" />

And the completion is this:

<img src={file_set_completion} alt="file_set_completion" width="50%" />

This is just a small example of what you can do with files, but you can do anything really. Happy prompting!
