title: Intro To Property Based Testing
author: RobinThrift
twitter: RobinThrift
homepage: robinthrift.com
shortcodes: true
css:
    - 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i|Trirong:400,700'
reveal:
    controls: false
    progress: false
    slideNumber: false
    history: true
    keyboard: true
    overview: true
    width: 1200
    transition: 'linear'
    backgroundTransition: 'fade'
    showNotes: true
    dependencies:
        - src: 'scripts/plugins/notes.js'
          async: false
        - src: 'scripts/plugins/Chart.bundle.min.js'
          async: false

-- {
    background:
        colour: '#a13649'
    classes:
        - title-card
}

## Property Based Testing

-- {
    background:
        colour: '#335098'
    classes:
        - author-card
}

### Hi, I'm
# Robin Thrift

##### Computer Science Student @ Leibniz Uni Hannover
##### Software Engineer @ NewStore


-- {
    background:
        colour: '#000'
        video: 'https://media.giphy.com/media/xXIpKByEW9BBu/giphy.mp4'
        loop: true
}

-- {
    background:
        colour: '#000'
        video: 'https://media.giphy.com/media/YROHNq4VhcPDO/giphy.mp4'
        loop: true
}

-- {
    background:
        colour: '#000'
        video: 'https://media.giphy.com/media/9laB7nZufqmas/giphy.mp4'
        loop: true
}

-- {
    background:
        colour: '#3e1915'
}

## Prerequisites

[fragmented-list]
- This is an advanced technique
- requires a little bit of theory
    - (and a little practice)
- focus on pure functions
[/fragmented-list]

-- {
    background:
        colour: '#182147'
}

### What is property <br /> based testing?

-- {
    background:
        colour: '#fff'
        img: 'img/google-search.png'
        position: 'center'
        size: 'contain'
}

-- {
    background:
        colour: '#fff'
        img: 'img/google-search-highlight.png'
        position: 'center'
        size: 'contain'
}

-- {
    background:
        colour: '#2c5d85'
}

## QuickCheck

[fragment]
> QuickCheck is a <span class="fragment highlight-red">combinator</span> library originally written
> in <span class="fragment highlight-red">Haskell</span>, designed to assist in software testing by
> <span class="fragment highlight-red">generating</span> test cases for test suites.
[/fragment]


-- {
    background:
        colour: '#182147'
        img: 'img/distance-earth-vulcan.png'
        position: center 100%
        size: 60%
}

[fragment]
### Example based testing
[/fragment]

[fragment]
```javascript
expect(distance(planets\['Earth'], planets\['Vulcan'])).toBe(1,514 * 10**14) // km
// 16 light years                                                    ↳ exponent operator
```

<small>(We all do this, all the time, of course 😉)</small>
[/fragment]


-- {
    background:
        colour: '#2c5d85'
    notes: |
        - high-level: example is very specific
        - behavior: broaded, unlike example
        - range: more than one
}

[fragment]
### What is a property?
[/fragment]

[fragment]
> \\[…\] a property is a <span class="fragment highlight-red">high-level</span>
> specification of <span class="fragment highlight-red">behavior</span>
> that should hold for a <span class="fragment highlight-red">range</span> of data points
> \\[…\]  
\> [ScalaTest](http://www.scalatest.org/user_guide/property_based_testing)
[/fragment]


-- {
    background:
        colour: '#2c5d85'
}

##### $distance:\ \mathbb{R}^3\ →\ \mathbb{R}^3\ →\ \mathbb{R}$

[half]
**Examples**
<ul class="no-bullets">
    <li class="fragment" data-fragment-index="2">
        <small>`Earth -> Vulcan = 16ly`</small>
    </li>
    <li class="fragment" data-fragment-index="3">
        <small>`Earth -> Alpha Centauri = 4.37ly`</small> 
    </li>
</ul>
[/half]

[half]
**Properties**

<ul class="no-bullets">
    <li class="fragment" data-fragment-index="4">
        $a, b\ \in\ \mathbb{R}^3$
    </li>
    <li class="fragment" data-fragment-index="6">
        $distance(a, b)\ \geq\ 0$
    </li>
    <li class="fragment" data-fragment-index="8">
        $distance(a, a)\ =\ 0$
    </li>
    <li class="fragment" data-fragment-index="10">
        $distance(a, b)\ \gt\ 0,\ a \neq b$
    </li>
    <li class="fragment" data-fragment-index="12">
        $distance(a, b)\ = \ distance(b, a)$
    </li>
</ul>
[/half]

<div class="image-fragments">
    [imgfrag index=1 src=img/distance-props/1.png /]
    [imgfrag index=5 src=img/distance-props/2.png /]
    [imgfrag index=7 src=img/distance-props/3.png /]
    [imgfrag index=9 src=img/distance-props/4.png /]
    [imgfrag index=11 src=img/distance-props/5.png /]
</div>

-- {
    background:
        colour: '#000'
        video: https://media.giphy.com/media/108KUzjTMEp2gw/giphy.mp4
        loop: true
}

-- {
    background:
        colour: '#000'
        video: https://media.giphy.com/media/tGQFAuLzsabkI/giphy.mp4 
        loop: true
}

-- {
    background:
        colour: '#6d3124'
}

> Writing tests first forces you to think about the problem
> you're solving.
> [fragment]Writing property-based tests forces you to think way harder.[/fragment]
> [@Jessica Kerr](https://twitter.com/jessitron) <br />
> [Tweet](https://twitter.com/jessitron/status/327480330900611072)

-- {
    background:
        colour: '#6d3124'
    classes:
        - flex-slide
}

[half centred]
`add(1, 2)`
[/half]
[half]
![img/ui.png](img/ui.png)
[/half]

-- {
    background:
        colour: '#fff'
        img: 'img/redux.png'
        size: '50%'
    notes: |
        - predictable state container
}

-- {
    background:
        colour: '#011b21'
}

[fragment]
```javascript
function postsReducer(state = initState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: \[...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state,
                stack: state.posts.filter(p => p.id !== action.payload)
            }
    }
}
```
[/fragment]


-- {
    background:
        colour: '#011b21'
}

```javascript
type Post = {
    id: number,
    content: string,
    draft: boolean
}

// action creator
function addPost(post: Post) {
    return {
        type: ADD_POST,
        payload: post
    }
}
```

-- {
    background:
        colour: '#011b21'
}

```javascript
// example based test
test('addPost', () => {
    expect(
        addPost({
            id: 1,
            content: 'Property based testing',
            draft: false
        })
    )
    .toEqual({
        type: NAVIGATE_TO,
        payload: {
            id: 1,
            content: 'Property based testing',
            draft: false
        }
    })
})
```

[fragment]
##### 100% line/branch/statement coverage <span class="fragment">👍</span>
[/fragment]
[fragment]
##### Done! <span class="fragment">Right?</span>
[/fragment]

-- {
    background:
        colour: '#011b21'
    notes: |
        - number = R
        - the types are now sets
        - Cardinality
        - kartesian product
}

```javascript
type Post = {
    id: number,
    content: string,
    draft: boolean
}
```

[fragment]
\\(
\mathit{boolean}\ =\ \\{\mathit{true},\ \mathit{false}\\}\\\
\\)
[/fragment]

[fragment]
\\(
|\mathit{boolean}|\ =\ 2\\\\
|\mathit{number}|\ \approx\ |\mathbb{R}|\ =\ \infty\\\
|\mathit{string}|\ \ \ \ =\ \infty\\\
\\)
[/fragment]

[fragment]
\\(
\mathbb{Post}\ =\ \mathit{number} \times \mathit{string} \times \mathit{boolean}\\\
p\ =\ (1, "hello", true)\ \in\ \mathbb{Post}
\\)
[/fragment]

-- {
    background:
        colour: '#011b21'
    notes: |
        - might be trivial
        - but this always holds true
}

```javascript
test('addPost', () => {
    let prop = jsc.forall(jsc.record({
        id: jsc.nat, // natural numbers
        content: jsc.nestring, // non-empty string
        draft: jsc.bool // boolean
    }), (post) => {
        let action = addPost(post)
        expect(action.type).toBe(ADD_POST)
        expect(action.payload.content).toBe(post.content)
        expect(action.payload.id).toBe(post.id)
        expect(action.payload.draft).toBe(post.draft)
    })

    jsc.assert(prop)
})
```

-- {
    background:
        colour: '#011b21'
}

```javascript
function postsReducer(state = initState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: \[...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state,
                stack: state.posts.filter(p => p.id !== action.payload)
            }
    }
}
```

-- {
    background:
        colour: '#011b21'
    notes: |
        - postsReducer simplified to ADD_POST
        - this could in theory be proven
        - I can't
}

```javascript
test('postsReducer', () => {
    let prop = jsc.forall(jsc.record({
        id: jsc.nat, // natural numbers
        content: jsc.nestring, // non-empty string
        draf: jsc.bool // boolean
    }), (payload) => {
        let prevState = {
            posts: \[]
        }
        let nextState = postsReducer(prevState, {type: ADD_POST, payload})
        expect(nextState.posts.length).toBe(prevState.posts.length + 1)
        expect(nextState.posts.find(p => deepEquals(p, payload))).toNotBeNull()
    })
})
```

[fragment]
\\(
p\ \in\ \mathbb{Post},\ P\ =\ \mathbb{Post}^*\\\
P'\ =\ postsReducer(P,\ p)\\\
|P|+1\ =\ |P'|\\\
p \notin P,\ p \in P'
\\)
[/fragment]


-- {
    background:
        colour: '#011b21'
    notes: |
        - any other prop?
        - filtered length cannot excede orignal length
}

```javascript
test('myFilter', () => {
    jsc.forall(
        jsc.array(jsc.nat),
        jsc.array(jsc.nat),
        (a, b) => {
            expect(
                myFilter(a).concat(myFilter(b))
            ).toEqual(
                myFilter(a.concat(b))
            )

            expect(
                myFilter(myFilter(a))
            ).toEqual(
                myFilter(a)
            )
        }
    )
})
```

-- {
    background:
        colour: '#2c5d85'
}

##### Some Notes

[fragmented-list]
- focus on pure functions
- try to break down your functions
- "What does my function actually do?"
- in the end all our programs are data transformations
- think in terms of the properties of the input and output
    - not on implementation details
- it will catch more errors/edge cases
- it will take practice
[/fragmented-list]


-- {
    background:
        colour: '#2c5d85'
    notes: |
        - start with the easiest functions
}

### Where to go next

[fragmented-list]
- [github.com/jsverify](https://github.com/jsverify/jsverify)
- try and augment your example based tests
[/fragmented-list]


-- {
    background:
        colour: '#6d2437'
}

## Thank you

[fragment]
### Questions?
[/fragment]
