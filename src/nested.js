import React from 'react';
import ReactDOM from 'react-dom/client';


function Ok(){
return (<About></About>)
}

function About(){
    return(
        <div>
        <Image ms="hello"></Image>
        <Title></Title>
        <Des></Des>
        <Button></Button>
      
        </div>
        )
}

function Image(props){
        return(<div className='BookImage'>
           {/* {props.ms} */}
        <img src="https://img.bookchor.com/images/cover/bc/9781310392489.JPG" alt="The Subtle Art of Not Giving a Fu*k"/>
        </div>)
};
function Title(){
    return(<div className='Author'>
        <h2>Mark Manson</h2>
        </div>)
}
function Des(){
    return(<div className='Des'>
        <p><strong>The Subtitles art of not giving a fuck:</strong>-In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be “positive” all the time so that we can truly become better, happier people For decades, we’ve been told that positive thinking is the key to a happy, rich life. “Fuck positivity,” Mark Manson says. “Let’s be honest, shit is fucked and we have to live with it.” In his wildly popular Internet blog, Manson doesn’t sugar-coat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mind-set that has infected.American society and spoiled a generation, rewarding them with gold medals just for showing up.Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited—“not everybody can be extraordinary, there are winners and losers in society and some of it is not fair or your fault.” Manson advises us to get to know our limitations and accept them. Once we embracenour fears, faults and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity and forgiveness we seek.There are only so many things we can give a fuck about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience.A much-needed grab-you-by-the-shoulders-and-look-you-in the-eye moment of real talk, filled with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a F**k is a refreshing slap for a generation to help them truly lead contented, grounded lives.</p>
        </div>)
}
function Button(){
    function HandleClick() {
       return  alert('You clicked me!');
      }
    return <button onClick={HandleClick}>BUy now</button>
}

export default Ok;