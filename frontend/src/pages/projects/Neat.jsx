export default function Neat() {
  return (
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
  )
}
