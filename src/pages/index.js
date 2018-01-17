import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <Helmet
      title="CodeBee"
      meta={[
        {
          name: 'description', content: 'Connect with other developers and designers through tutorials, questions, and projects. All in one place.',
        },
      ]}
    />
    <h1>Sorry, we're in hibernation.</h1>
    <p>CodeBee was released during the summer of 2015 as a way to connect developers and designers together through tutorials, questions, and projects.</p>
    <p>While everything was going great in the first few months, site activity soon died down. We attribute this to our lack of effort in pushing out updates and trying to grow the community.</p>
    <p>There were many lessons learned from creating CodeBee. At the time, it was a niche idea although much of our inspiration came from Forrst. Now, there are many large communities that accomplish the same goal we initially set out to do.</p>
    <h2>What's next?</h2>
    <p>We're calling this a hibernation because we still feel a strong brand behind CodeBee and want to eventually revive it as something greater. Perhaps we'll decide to create another community in our own unique way. Of course we're <a href="https://ninjality.com/contact">open for suggestions</a>.</p>
    <h2>Are all posts gone?</h2>
    <p>Nope. This is a static site we're using as <Link to="/archive">an archive</Link>. If you need a post edited or taken down, <a href="https://ninjality.com/contact">contact us</a>.</p>
    <h2>How do I stay updated?</h2>
    <p>CodeBee was built by <a href="https://ninjality.com/">Ninjality</a>, so you can follow <a href="https://twitter.com/ninjalitydesign">@NinjalityDesign</a> for announcements. You can also follow the individual team members, <a href="https://twitter.com/sunnysinghio">@SunnySinghIO</a> and <a href="https://twitter.com/DesignByKyle">@DesignByKyle</a>.</p>
  </div>
)

export default IndexPage
