import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Health = (props) => {
  useEffect(() => {
  }, [])
  // some quick card css
  const partyCard = {
    card: {
      backgroundColor: '#CE6A6C',
      color: '#222F53',
      borderRadius: 20,
      padding: '1rem',
      width: '90%',
      // height: '24rem',
      margin: 10,
      textAlign: 'center'
    },
    conatiner: {
      display: 'center'
    },
    button: {
      backgroundColor: '#222F53'
    }
  }

  return (
    <div>
      <div>
        <div>
          <Card style={partyCard.card}>
            <Card.Title>Health Facts</Card.Title>
            <Card.Text>According to the CDC.gov</Card.Text>
            <Card.Text>Drinking too much can harm your health. Excessive alcohol use led to approximately 95,000 deaths and 2.8 million years of potential life lost (YPLL) each year in the United States from 2011 – 2015, shortening the lives of those who died by an average of 29 years.1 Further, excessive drinking was responsible for 1 in 10 deaths among working-age adults aged 20-64 years.2 The economic costs of excessive alcohol consumption in 2010 were estimated at $249 billion, or $2.05 a drink.3
            </Card.Text>
          </Card>
          <Card style={partyCard.card}>
            <Card.Title>What is a standard drink?</Card.Title>
            <Card.Text>In the United States, a standard drink contains 0.6 ounces (14.0 grams or 1.2 tablespoons) of pure alcohol. Generally, this amount of pure alcohol is found in</Card.Text>
            <Card.Text>12-ounces of beer (5% alcohol content).</Card.Text>
            <Card.Text>8-ounces of malt liquor (7% alcohol content).</Card.Text>
            <Card.Text>5-ounces of wine (12% alcohol content).</Card.Text>
            <Card.Text>1.5-ounces of 80-proof (40% alcohol content) distilled spirits or liquor (e.g., gin, rum, vodka, whiskey).</Card.Text>
          </Card>
          <Card style={partyCard.card}>
            <Card.Title>What is excessive drinking?</Card.Title>
            <Card.Text>Excessive drinking includes binge drinking, heavy drinking, and any drinking by pregnant women or people younger than age 21</Card.Text>
            <Card.Text>Binge drinking, the most common form of excessive drinking, is defined as consuming</Card.Text>
            <Card.Text>-For women, 4 or more drinks during a single occasion</Card.Text>
            <Card.Text>-For men, 5 or more drinks during a single occasion.</Card.Text>
            <Card.Text>Heavy drinking is defined as consuming</Card.Text>
            <Card.Text>-For women, 8 or more drinks per week.</Card.Text>
            <Card.Text>-For men, 15 or more drinks per week.</Card.Text>
            <Card.Text>Most people who drink excessively are not alcoholics or alcohol dependent.</Card.Text>
          </Card>
          <Card style={partyCard.card}>
            <Card.Title>What is moderate drinking?</Card.Title>
            <Card.Text>The Dietary Guidelines for Americans recommends that adults of legal drinking age can choose not to drink, or to drink in moderation by limiting intake to 2 drinks or less in a day for men or 1 drink or less in a day for women, on days when alcohol is consumed.4 The Guidelines also do not recommend that individuals who do not drink alcohol start drinking for any reason and that if adults of legal drinking age choose to drink alcoholic beverages, drinking less is better for health than drinking more.</Card.Text>
          </Card>
          <Card style={partyCard.card}>
            <Card.Title>There are some people who should not drink any alcohol, including those who are:</Card.Title>
            <Card.Text>-Younger than age 21.</Card.Text>
            <Card.Text>-Pregnant or may be pregnant.</Card.Text>
            <Card.Text>-Driving, planning to drive, or participating in other activities requiring skill, coordination, and alertness.</Card.Text>
            <Card.Text>-Taking certain prescription or over-the-counter medications that can interact with alcohol.</Card.Text>
            <Card.Text>-Suffering from certain medical conditions.</Card.Text>
            <Card.Text>-Recovering from alcoholism or are unable to control the amount they drink.</Card.Text>
            <Card.Text>By adhering to the Dietary Guidelines, you can reduce the risk of harm to yourself or others.</Card.Text>
          </Card>
          <Card style={partyCard.card}>
            <Card.Title>Short-Term Health Risks</Card.Title>
            <Card.Text>Excessive alcohol use has immediate effects that increase the risk of many harmful health conditions. These are most often the result of binge drinking and include the following:</Card.Text>
            <Card.Text>-Injuries, such as motor vehicle crashes, falls, drownings, and burns.</Card.Text>
            <Card.Text>-Violence, including homicide, suicide, sexual assault, and intimate partner violence.</Card.Text>
            <Card.Text>-Alcohol poisoning, a medical emergency that results from high blood alcohol levels.</Card.Text>
            <Card.Text>-Risky sexual behaviors, including unprotected sex or sex with multiple partners. These behaviors can result in unintended pregnancy or sexually transmitted diseases, including HIV.</Card.Text>
            <Card.Text>-Miscarriage and stillbirth or fetal alcohol spectrum disorders (FASDs) among pregnant women.</Card.Text>
          </Card>
          <Card style={partyCard.card}>
            <Card.Title>Long-Term Health Risks</Card.Title>
            <Card.Text>Over time, excessive alcohol use can lead to the development of chronic diseases and other serious problems including:</Card.Text>
            <Card.Text>-High blood pressure, heart disease, stroke, liver disease, and digestive problems.</Card.Text>
            <Card.Text>-Cancer of the breast, mouth, throat, esophagus, liver, and colon.</Card.Text>
            <Card.Text>-Weakening of the immune system, increasing the chances of getting sick.</Card.Text>
            <Card.Text>-Learning and memory problems, including dementia and poor school performance.</Card.Text>
            <Card.Text>-Mental health problems, including depression and anxiety.</Card.Text>
            <Card.Text>-Social problems, including lost productivity, family problems, and unemployment.</Card.Text>
            <Card.Text>-Alcohol use disorders, or alcohol dependence.</Card.Text>
            <Card.Text>By not drinking too much, you can reduce the risk of these short- and long-term health risks.</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Health)
