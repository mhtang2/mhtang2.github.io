## Demo
 <iframe width="800" height="500"
src="https://www.youtube.com/embed/_yoCv8ykoHI" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
## Inspiration
When animating characters, animators waste massive amounts of time drawing their mouths frame by frame to synchronize the mouth movements with the characters speech. Especially in fast-paced scenes with dense dialogue, it becomes increasingly hard to animate these scenes in an industry culture where employees move from deadline to deadline. This process could be easily accelerated if there were a way to automatically synchronize the animation and voice lines.
## What it does
AI-nimator leverages computer vision to generate the appropriate animations based on the voice actor's natural mouth shape. By recording the voice actor's face while they read their voice lines and analyzing their mouth shape we can automatically produce correctly synchronized mouth animations.
## How we built it
We created a fully automated pipeline using dlib state-of-the-art facial landmark detection model and transfer learning to classify mouth shapes on every frame of video as one of the following labels: "closed", "slightly agape", and "open". We leverage the 68 point facial landmark detection model to extract 20 key points from the mouth, then use a k-Nearest Neighbor algorithm to identify the class with the most similar shape. We then superimpose the corresponding mouth animation onto the character's profile to produce the synchronized animation in as fluid of a manner as possible.
## Challenges we ran into
One common problem with computer vision in general is skewed and rotated camera angles. To improve our model's performance in these situations, we standardized the camera angles of each image by  implementing a linear transform which could take mouth images viewed at a skewed angle and return the image viewed from a straight forward angle. 

Another problem was the lack of labeled data. We would require images of different mouth shapes labeled with their respective classes. Because there is very little data in this format, we originally planned to automate data labelling to generate supervised data. By detecting extracting the mouth landmarks from existing animations, we could then cluster the data and label each data point with their class assigned by clustering. Because we didn't have as much time as we hoped to implement this feature, we came to the solution of using weak supervision to train our model. We hand labeled one image from each class, then found other images with similar shapes by comparing the L2-norm of the difference in mouth shapes. 
## Accomplishments that we're proud of
Our good code design philosophy and style means that this project can be carried on and improved in the future without much significant work. The model is easily scalable to more number of classes and its performance will continue to scale with more data.
## What we learned
This project involved the whole machine learning pipeline, from collecting data, to preprocessing, to training, to actual use cases. We also had a chance to brush up on our linear algebra while implementing the coordinate transforms to adjust for skew in the camera angle.
## What's next for AI-nimator
As we mentioned before, we hope to have time in the future to implement the part of our pipeline which generates labeled data so we can train a better model through fully supervised learning. There are also numerous other cool features we could implement, like generating skewed  mouth animations to match the skew of the face.

 <iframe width="800" height="500"
src="https://www.youtube.com/embed/NNRhOr6Fbqo" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
