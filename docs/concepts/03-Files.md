import create_file from "../images/files/create_file.png";
import story_file from "../images/files/file_example.png";
import template_file from "../images/files/template_file.png";
import file_completion from "../images/files/file_completion.png";

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

There is an example of how to use sets of files [here](/concepts/files/#set-of-files)
