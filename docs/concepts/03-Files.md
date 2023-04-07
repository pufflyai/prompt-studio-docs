import create_file from "../images/files/create_file.png";
import story_file from "../images/files/file_example.png";
import template_file from "../images/files/template_file.png";
import file_completion from "../images/files/file_completion.png";
import create_set_files from "../images/files/create_set_files.png"
import moverBot_template from "../images/files/moverBot_template.png"
import file_set_prompt_preview from "../images/files/file_set_prompt_preview.png"
import file_set_completion from "../images/files/file_set_completion.png"

Files are a type of asset that you can pass to your template. Let's explore how to use it.

### File creation

To create a file, you click on the **_+_** sign to create the asset:

<img src={create_file} alt="create_file" width="30%" />

### File as a variable in a template

Let's say that we want to generate an ending to a story that we have in a file. Our story is about a cat called Mumin.

<img src={story_file} alt="story_file"  />

Let's pass this file as a variable in our template:

<img src={template_file} alt="template_file"  />

If we run the prompt, we get the following completion:

<img src={file_completion} alt="file_completion"  />

### Set of files in a template

Just like we created our file above, we can create a set of files and pass that set to the template. Let's explore an example.
Let's say we have content scattered in different files and we want to generate a summary of the information that is in all those files to have all the information in one place.

First, let's create a collection of our files:

COLLECTION_OF_FILES

Let's assume we have a robot called MoverBot, and the collection contains information about this robot:

- The Overview file gives a general definition of what the MoverBot does
- The Design file is about how the robot was designed
- The Testing file is about the process by which the robot was tested

Let's create a set of these files:

<img src={create_set_files} alt="create_set_files"  width="50%"/>

Now, let's write our template:

<img src={moverBot_template} alt="moverBot_template"  />

So now, our generated prompt looks something like this:

<img src={file_set_prompt_preview} alt="file_set_prompt_preview" width="50%" />

And the completion is this:

<img src={file_set_completion} alt="file_set_completion" width="50%" />

This is just a small example of what you can do with files, but you can do anything really. Happy prompting!
