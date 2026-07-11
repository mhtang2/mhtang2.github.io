import { ProjectVideo } from '../../components/projects/shared'

export default function TangStats() {
  return (
    <>
      <h2>About Tang Stats</h2>
      <p>
        <a href="https://mhtang2.github.io/TangStats" target="_blank" rel="noreferrer">Tang Stats</a> was the result of a freelance job offered to me in early 2020 by Groger Ranks, a QuizBowl organization planning to host a tournament that was interested in software to keep track of advanced statistics for each team, player, round of the tournament, etc. The desktop app is written using plain Java and Swing, with the licensing server written with Node.js and MongoDB. After completing the project I decided to try to market this product to other tournament hosts so I created a website promoting and documenting the software.
      </p>
      <p>
        Reflecting on my experience writing this app, I would definitely do some things differently if I could rewrite it. For one, Java Swing is clunky and frankly outdated - I would probably use something a bit more modern and robust like React or Electron.
      </p>
      <h2>Demo</h2>
      <ProjectVideo src="https://www.youtube.com/embed/WBbftg8zg1w" />
    </>
  )
}
