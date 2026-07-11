import { pdfEmbed, videoEmbed } from '../styles/ui'

function Pdf({ src, height = 1000 }) {
  return <embed src={src} type="application/pdf" className={pdfEmbed} height={height} />
}

function Video({ src, className }) {
  return (
    <iframe
      src={src}
      title="Video"
      className={className ?? videoEmbed}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

const bodies = {
  doubledescent: (
    <>
      <h2>Background:</h2>
      <p>
        My final project was to find an open topic in Deep Learning theory literature, and attempt to find a solution.
        Our group chose the the topic of providing a theoretical backing to the phenomenon of double descent.
        There is not a lot of existing strong literature on why deep networks work so well in an overparameterized setting.
        We read the paper of Li et al which attempts to bound an overparameterized shallow network (more nodes than datapoints).
        Among other restrictions like fixed random first layer, the class of networks analyzed do not have biases.
        In our research, we attempt to adjust their proof to account for networks with biases, thus allowing them to represent a larger class of fuctions.
      </p>
      <h2>Overview</h2>
      <Pdf src="/resources/dlt_poster.pdf" />
    </>
  ),
  dlt: (
    <>
      <h2>Background:</h2>
      <p>
        This is my homework for CS 540, a proof based graduate course in deep learning theory. The homework was designed by Prof. Telgarsky{' '}
        <a href="https://mjt.cs.illinois.edu/courses/dlt-f22/files/hw1.pdf" target="_blank" rel="noreferrer">
          [Link to original problem set]
        </a>
        . Many of the proofs for this homework are regarding universal approximation and the limits of using networks to universally approximate functions.
      </p>
      <h2>Overview</h2>
      <ol>
        <li>
          Show when universal approximation works well and when it doesn&apos;t
          <ul>
            <li>a) Show that for any loss, the best neural network performs as well as the best continuous functions</li>
            <li>b) Show that bounding approximation error by 1-norm is not enough, and that a uniform norm is required. i.e. two functions may be close on average (1-norm), but if they are not bounded by a uniform norm (max), they could yield wildy different losses due to distribution of the data</li>
            <li>c) Show that functions that change infinitely like sin(x) cannot be approximated to bounded error</li>
            <li>d) Show the equivalence between a wide shallow network, and deep narrow network by construction</li>
          </ul>
        </li>
        <li>
          General statements of universal approximation use a number of nodes proportional to the Lipschitz constant of the approximated function. However, parts of the function that change less should use less nodes. This shows an adaptive construction for universal approximation.
          <ul>
            <li>a) Show that bounded variation norm is less than Lipschitz norm</li>
            <li>b) Cases where bounded variation norm is much smaller than Lipschitz norm</li>
            <li>c) The adaptive construction which uses number of nodes proportional to BV-norm instead of Lipschitz constant</li>
            <li>d) Show that ReLU networks can also be used for the approximation</li>
          </ul>
        </li>
        <li>
          Show that two data-points which are close together are hard to approximate. When first layer weights are initialized randomly, there is a high probability that to separate the two points, second layer weights need to be picked with very high norm(increasing complexity).
        </li>
        <li>
          Show various properties of approximation
          <ul>
            <li>Approximation of functions is closed under single derivative and linear combination</li>
            <li>Approximation of functions is closed under multiple derivatives (induction)</li>
            <li>Monomials can be aproximated</li>
            <li>exp(x) can be approximated</li>
          </ul>
        </li>
      </ol>
      <Pdf src="/resources/dlt_hw1.pdf" />
    </>
  ),
  neat: (
    <>
      <h2>About NEAT</h2>
      <p>
        NEAT (Neuroevolution through Augmenting Topologies) is a genetic algorithm which trains agents in a way that mimics biological evolution. Rather than optimizing a single agent, there is actually a popoulation of agents. The most fit of the population are allowed to reproduce, while the others die off. Selectively breeding the most fit networks will eventually lead to populations with higher and higher fitnesses. My friend and I found it fascinating and implemented the algorithm based on this{' '}
        <a href="http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf" target="_blank" rel="noreferrer">paper</a>. The innovation from this method is that it utilizes non-dense networks, and evolves the topology of the network rather than only the weights and biases. The coolest idea in this paper is how the topology of the network can be stored in genes and perform crossover during reproduction just as in real life genetics. It also talks about the idea of speciation: splitting the population into isolated species that are allowed time to develop features that may be detrimental in the short run but eventually lead to a larger performance gain. Speciation allows these features to develop by separating the species and giving them a grace period before competing with the general population.
      </p>
      <h2>Results</h2>
      <p>
        We managed to get a fully working implementation that learned XOR effectively. We also tried to train and agent to trade stocks, which unfortunately barely outperformed random trading.
      </p>
      <h2>Git Repo</h2>
      <p>
        <a href="https://github.com/mhtang2/NEAT-Implementation" target="_blank" rel="noreferrer">
          github.com/mhtang2/NEAT-Implementation
        </a>
      </p>
    </>
  ),
  transferlearning: (
    <>
      <h2>Overview</h2>
      <p>
        This research project was done for a graduate course I took on Transfer Learning. While transfer learning is commonly thought of as applying models across domains, it can equivalently be thought of as looking at how models handle shifts in the distribution of their input dataset. In our project we seek to quantify how image data augmentations affect the distribution, and consequently how that distribution shift affects the model performance.
      </p>
      <p>
        While it is know that dataset augmentation will benefit model performance, we are interested in why that is the case. Intuitively it should help model generalization, but we seek to find a more concrete explanation by analyzing the problem through the lens of distribution shift.
      </p>
      <p>The poster and final paper are both included below.</p>
      <h2>Poster</h2>
      <Pdf src="/resources/transfer_learning_poster.pdf" height={600} />
      <h2>Final paper</h2>
      <Pdf src="/resources/transfer_learning_writeup.pdf" height={800} />
    </>
  ),
  halhack: (
    <>
      <h2>Overview</h2>
      <p>
        This hackathon was hosted by the National Center for Supercomputing Applications(NCSA) at UIUC. The goal was to create a model to predict certain atmospheric properties given the concentrations of 100 chemicals. The main challenge was handling high dimensional temporal-spatial data. We were given time-series data where each entry was a 3D tensor (Chemical concentrations at each point in space). Since there were 100 chemicals, our data was of dimension (# of timesteps, # of chemicals, x, y, z), with structural correlation over the time and space dimensions.
      </p>
      <p>
        In total we had 200GB of data, so the only viable way to train the model was using multiple GPUs and resources on clusters provisioned by NCSA.
      </p>
      <Pdf src="/resources/hal_hack_slides.pdf" height={600} />
    </>
  ),
  r3: (
    <>
      <h2>Overview</h2>
      <p>
        This hackathon was a 2 day long event hosted by Nextdoor during my Summer internship. The purpose was to demo technology which I thought was novel, interesting, and relevant to our product. There currently exists a feature which uses LLMs to detect aggressive or offensive comments and suggest changes to the user before they post the comment. My idea was to have something similar, but for visual features like images or videos instead.
      </p>
      <p>This project utilizes YOLO and DALLE inpainting to demonstrate that such a project is viable.</p>
      <Pdf src="/resources/R3_hack_slides.pdf" height={600} />
    </>
  ),
  ainimator: (
    <>
      <h2>Inspiration</h2>
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start">
        <p className="flex-1">
          When animating characters, animators waste massive amounts of time drawing their mouths frame by frame to synchronize the mouth movements with the characters speech. Especially in fast-paced scenes with dense dialogue, it becomes increasingly hard to animate these scenes in an industry culture where employees move from deadline to deadline. This process could be easily accelerated if there were a way to automatically synchronize the animation and voice lines.
        </p>
        <Video src="https://www.youtube.com/embed/_yoCv8ykoHI" className="w-full max-w-md shrink-0 aspect-video" />
      </div>
      <h2>What it does</h2>
      <p>
        AI-nimator leverages computer vision to generate the appropriate animations based on the voice actor&apos;s natural mouth shape. By recording the voice actor&apos;s face while they read their voice lines and analyzing their mouth shape we can automatically produce correctly synchronized mouth animations.
      </p>
      <h2>How we built it</h2>
      <p>
        We created a fully automated pipeline using dlib state-of-the-art facial landmark detection model and transfer learning to classify mouth shapes on every frame of video as one of the following labels: &quot;closed&quot;, &quot;slightly agape&quot;, and &quot;open&quot;. We leverage the 68 point facial landmark detection model to extract 20 key points from the mouth, then use a k-Nearest Neighbor algorithm to identify the class with the most similar shape. We then superimpose the corresponding mouth animation onto the character&apos;s profile to produce the synchronized animation in as fluid of a manner as possible.
      </p>
      <h2>Challenges we ran into</h2>
      <p>
        One common problem with computer vision in general is skewed and rotated camera angles. To improve our model&apos;s performance in these situations, we standardized the camera angles of each image by implementing a linear transform which could take mouth images viewed at a skewed angle and return the image viewed from a straight forward angle.
      </p>
      <p>
        Another problem was the lack of labeled data. We would require images of different mouth shapes labeled with their respective classes. Because there is very little data in this format, we originally planned to automate data labelling to generate supervised data. By detecting extracting the mouth landmarks from existing animations, we could then cluster the data and label each data point with their class assigned by clustering. Because we didn&apos;t have as much time as we hoped to implement this feature, we came to the solution of using weak supervision to train our model. We hand labeled one image from each class, then found other images with similar shapes by comparing the L2-norm of the difference in mouth shapes.
      </p>
      <h2>Accomplishments that we&apos;re proud of</h2>
      <p>
        Our good code design philosophy and style means that this project can be carried on and improved in the future without much significant work. The model is easily scalable to more number of classes and its performance will continue to scale with more data.
      </p>
      <h2>What we learned</h2>
      <p>
        This project involved the whole machine learning pipeline, from collecting data, to preprocessing, to training, to actual use cases. We also had a chance to brush up on our linear algebra while implementing the coordinate transforms to adjust for skew in the camera angle.
      </p>
      <h2>What&apos;s next for AI-nimator</h2>
      <p>
        As we mentioned before, we hope to have time in the future to implement the part of our pipeline which generates labeled data so we can train a better model through fully supervised learning. There are also numerous other cool features we could implement, like generating skewed mouth animations to match the skew of the face.
      </p>
      <Video src="https://www.youtube.com/embed/NNRhOr6Fbqo" />
    </>
  ),
  proxy: (
    <>
      <h2>Background</h2>
      <p>
        This is a semester project for Honors System Programming. The project was to write a proxy server in <strong>C</strong>. Our proxy server can redirect network traffic using the builtin networking code of the C standard library.{' '}
        <a href="https://github.com/mhtang2/296Proxy" target="_blank" rel="noreferrer">[Link to repo]</a>
      </p>
      <p>Features</p>
      <ul>
        <li>Handles multiple clients using multithreading</li>
        <li>Handles secure connections (HTTPS) using OpenSSL</li>
        <li>Whitelisting and blacklisting domains</li>
      </ul>
      <h2>Demo</h2>
      <Video src="https://www.youtube.com/embed/VgEg_6u5XuA?si=-WRHO87gtuhRMGF0" className="mb-8 aspect-video w-full max-w-4xl" />
      <h2>Presentation</h2>
      <Pdf src="/resources/proxy_slides.pdf" height={600} />
    </>
  ),
  tangstats: (
    <>
      <h2>About Tang Stats</h2>
      <p>
        <a href="https://mhtang2.github.io/TangStats" target="_blank" rel="noreferrer">Tang Stats</a> was the result of a freelance job offered to me in early 2020 by Groger Ranks, a QuizBowl organization planning to host a tournament that was interested in software to keep track of advanced statistics for each team, player, round of the tournament, etc. The desktop app is written using plain Java and Swing, with the licensing server written with Node.js and MongoDB. After completing the project I decided to try to market this product to other tournament hosts so I created a website promoting and documenting the software.
      </p>
      <p>
        Reflecting on my experience writing this app, I would definitely do some things differently if I could rewrite it. For one, Java Swing is clunky and frankly outdated - I would probably use something a bit more modern and robust like React or Electron.
      </p>
      <h2>Demo</h2>
      <Video src="https://www.youtube.com/embed/WBbftg8zg1w" />
    </>
  ),
}

export default function ProjectBody({ slug }) {
  return <div className="content-prose">{bodies[slug] ?? <p>Project not found.</p>}</div>
}
