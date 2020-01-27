# Digital TR-808
A simple drum machine built in React

## Installation
from the root directory:  
`npm install`
in two different tabs run:  
`npm run dev-server` 
`npm run dev-bundle`  
open a tab at localhost:4242 in your browser

to run tests:  
`npm test`

## Libraries
ReactJS

## Notes
I went a little bit over on time for this exercise, but tbh getting to build stuff like this is part of the reason I wanted to become a developer in the first place & I didn’t go over by much. It was mostly because my biggest gotcha came at the very end (see Yikes section below) & I was trying to see if I could quickly rectify the requirement I missed (spoiler: I could not). I’ve also found that the velocity really picks up at the end of projects because everything finally clicks & it’s easier to get things working, so even when I was short on time, I still felt like I had figured out how it all hung together.

This project is built with server-side rendering. I picked React based it’s the JS library that I’m most comfortable using & it’s good for apps that have high user interactivity. The initial commit/my starter files are based on this blog post, which I’ve found helpful as a resource because I like understanding the dependencies that I’m using when I start a project. Create react app is great, but it comes with a lot of extras that I didn’t need for a project of this scope.

For an app this size, server-side vs client side rendering has negligible performance differences, so that choice was mostly out of the convenience of having starter files. Though if this project were to scale up, I still might make the choice to use server-side rendering because it results in fewer GET requests that might result from loading the demo tracks, despite having a longer initial load time. 

**Functionally I thought of this app as a clock because it increments a unit (the beat) at a set interval (bpm), even though the drum machine is animated along the y axis visually. The drum machine doesn’t move through space as much as it moves through time. That approach feels like the core of this project, so if you read any part of this ReadMe, I hope it’s that.**

### Process
For me, the hardest part of any project is just...getting started when I’m working from scratch. Usually when I’m at work I can search for past PRs that had similar requirements, but here I just started with the wireframe. I printed it out & marked it up to get a basic idea of the components I’d want to use & how the state will be stored. I try to avoid over planning because there’s only so much I can be sure of in terms of state/props ownership & I’ve found that the structure reveals itself once I’m actually in it.

Next, I googled around for examples of drum machines in React, which led me to the ToneJS library. I wanted to incorporate it here, but I was a bit too confident about how much I could get done in 4 hours & decided against it pretty quickly. At one point, I managed to get a sound working by copying & pasting some of their example code into my project, but right afterwards I ran into errors that I could tell would send me down a rabbit hole that weren’t worth sacrificing basic requirements. Basically, I think about this all the time when I’m working on projects.

### Data
One thing that would make my code more scalable would be to modify slightly how the Demo tracks are stored to look more like this:

```{ 
      id: 1,
      demo_name: "Demo 1",
      sequence: [
        { instrument_id: 1,
          track: [true,false,false,false, true, false, false, false, true, false, false, false, true, false, false, false]
        },
        { instrument_id: 2,
          track: [false,false,false, false, true, false, false, false, false, false, false, false, true, false, false, false]
        },
        { instrument_id: 3,
          track: [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false]
        },
        { instrument_id: 4,
          track: [true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false]
        }
      ]
    }```

Because I imagine the data being modeled like this in a db:
![schema](/extras/schema.png)

Indexing the sequences on an instrument_id would make it easier to count the number of instruments, load its sequence & later find the sequence to update when a user clicks a beat to make it active/inactive. Right now my project relies on having 4 instruments & each demo using 4 instruments, but what would happen if one of the demos had 5 instruments? Adjusting the data a little bit to account for this would make the dependency a little bit less precarious.

### Tests
I used Jest to write some basic tests for some of the components in this project. I’m not particularly dogmatic about Jest, but I’m comfortable with it & I’ve been able to teach myself how to implement it with online tutorials pretty easily & it reminds me a lot of rspec, which we use at my current company for ruby testing (we aim for 100% test coverage on the backend, though we don’t current use TDD on the front end). This project doesn’t have full test coverage, but I wanted to demonstrate an understanding of testing & set up the infrastructure for it. Ideally, I’d aim for test coverage for the following for each component:
1. Component rendering - does the component render correctly?
2. Props - does the component return the default props? Can it receive a custom value & match the prop afterthe component renders? 
3. Data types - what kind of data is returned from the different components? e.g. does the `isPlaying` state return a boolean?
4. Events - was the event called? Was the expected behavior executed when the event is simulated?
5. Conditions - does the component render differently based on the conditions? e.g. the number of sequencesthat render would change depending on the number of instruments that are in a given demo
6. State - does the current state return as expected? Does the modified state return as expected if wesimulate a state change?

### Yikes
I worked on this piecemeal so I could walk away if I got stuck on something & not waste time spinning my wheels. I got the basic layout working & I guess at some point between brunch & coming back to it to implement the functionality/feeling pressed for time, I forgot the requirement that a user should be able to change the premade sequences. I guess when I came back to it I just focused exclusively on the Requirements section because I even remember thinking “Oh it’s funny that changing the sequence isn’t a requirement”, but then when I was finished & I re-read the whole page, the requirement was right there all along. My overage time was mostly spent seeing if I could salvage things to make the beats clickable to flip the isActive prop, but it actually would require reworking several different sections of my project, which makes me feel like I made some choices that weren’t as flexible as I thought they were. It was a kind of sinking this-changes-everything moment when I realized what I’d done wrong, but I do know how I would address it & left an explanation in the App.js file.

## TO DO
[x] Map out component hierarchy from wireframe<br/>
[x] Get servers running<br/>
[x] Add basic component structure<br/>
[x] Add Bootstrap<br/>
[x] Add layout<br/>
[] Add props for components / figure out where to lift state up<br/>
    [] Progress bar animation<br/>
    [] Tempo imput<br/>
    [] Pattern/sequence selection<br/>
[] Add Tone Js? (commit to this before adding interactive parts?)<br/>
[x] Add premade demos<br/>
[] Fix button aligment with beat divs bc ohmygod it's killing me<br/>
[] Adding styling to demo buttons so you know which demo is active<br/>
  
## Extras  
[] Allow user to add track<br/>
[] Allow use to save demo? (write to js file or use local storage?)<br/>
[] *T E S T S*<br/>
[] Responsive considerations<br/>
[] Make sure colors/contrast are compliant<br/>
[] Add max bpm<br/>