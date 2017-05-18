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

[stack]
[fragment index=1]
```javascript
function logsReducer(state = initState, action) {
    switch (action.type) {
        case ADD_LOG:
            return {
                ...state,
                logs: \[...state.logs, action.payload]
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(l => !deepEquals(l, action.payload))
            }
    }
}
```
[/fragment]

[fragment index=0]
```javascript
type Log = {
    stardate: number,
    content: string,
    supplement: boolean
}
```
[/fragment]
[/stack]


-- {
    background:
        colour: '#011b21'
}

```javascript
// action creator
function addLog(log: Log) {
    return {
        type: ADD_LOG,
        payload: log
    }
}
```

-- {
    background:
        colour: '#011b21'
}

```javascript
// example based test
test('addLog', () => {
    expect(
        addLog({
            startdate: 48672.5,
            content: 'Property based testing',
            supplement: false
        })
    )
    .toEqual({
        type: ADD_LOG,
        payload: {
            startdate: 48672.5,
            content: 'Property based testing',
            supplement: false
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
}

```javascript
let a: boolean
```

[fragment]
\\(
a\ \in\ \mathit{boolean}\\\
\mathit{boolean}\ =\ \\{\mathit{true},\ \mathit{false}\\}
\\)
[/fragment]
[fragment]
\\(
|\mathit{boolean}|\ =\ 2\\\\
\\)
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
type Log = {
    stardate: number,
    content: string,
    supplement: boolean
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
\mathbb{Log}\ =\ \mathit{number} \times \mathit{string} \times \mathit{boolean}\\\
|\mathbb{Log}|\ =\ \infty\\\
l\ =\ (48672.5,\ "Hello There",\ false)\ \in\ \mathbb{Log}
\\)
[/fragment]


-- {
    background:
        colour: '#011b21'
}

### jsverify

```javascript
// a, b, c generators
jsc.forall(a, b, ...c, checkFn)

let prop = jsc.forall(jsc.nat, jsc.nat, (a, b) => {
    return a + b === b + a
})

jsc.assert(prop)
```

[fragment]
```javascript
jsc.record({
    a: jsc.nat,
    b: jsc.string
})
// e. g. {a: 1, b: "c"}

jsc.array(jsc.nat)
// e. g. \[1, 2]
```
[/fragment]


-- {
    background:
        colour: '#011b21'
    notes: |
        - might be trivial
        - but this always holds true
}

```javascript
test('addLog', () => {
    let prop = jsc.forall(jsc.record({
        stardate: jsc.number, // real number
        content: jsc.nestring, // non-empty string
        supplement: jsc.bool // boolean
    }), (log) => {
        let action = addLog(log)
        expect(action.type).toBe(ADD_LOG)
        expect(action.payload.stardate).toBe(log.stardate)
        expect(action.payload.content).toBe(log.content)
        expect(action.payload.supplement).toBe(log.supplement)
    })

    jsc.assert(prop)
})
```

-- {
    background:
        colour: '#011b21'
}

```javascript
function logsReducer(state = initState, action) {
    switch (action.type) {
        case ADD_LOG:
            return {
                ...state,
                logs: \[...state.logs, action.payload]
            }
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(l => !deepEquals(l, action.payload))
            }
    }
}
```

-- {
    background:
        colour: '#011b21'
    notes: |
        - logsReducer simplified to ADD_LOG
        - this could in theory be proven
        - I can't
}

```javascript
test('logsReducer', () => {
    let prop = jsc.forall(jsc.record({
        stardate: jsc.number,
        content: jsc.nestring,
        supplement: jsc.bool
    }), (payload) => {
        let prevState = {
            logs: \[] // could also be generated
        }
        let nextState = logsReducer(prevState, {type: ADD_LOG, payload})
        expect(nextState.logs.length).toBe(prevState.logs.length + 1)
        expect(nextState.logs.find(l => deepEquals(l, payload))).toNotBeNull()
    })
})
```

[fragment]
\\(
l\ \in\ \mathbb{Log},\ \mathbb{L}\ =\ \mathbb{Log}^\*\ \setminus\ \\{l\\}\\\
\mathit{logsReducer}\ →\ \mathbb{Log}^\*\ →\ (l\ \in\ \mathbb{Log})\ →\ \mathbb{Log}^\*\\\
\mathbb{L}'\ =\ \mathit{logsReducer}(\mathbb{L},\ l)\\\
|\mathbb{L}|+1\ =\ |\mathbb{L}'|\\\
l \notin \mathbb{L},\ l \in \mathbb{L}'
\\)
[/fragment]


-- {
    background:
        colour: '#011b21'
    notes: |
        - any other prop?
        - filtered length cannot excede orignal length
}

[stack with-vertical]
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

[fragment]
```javascript
expect(
    myFilter(a).length <= a.length
).toBe(true)
```
[/fragment]
[/stack]

-- {
    background:
        colour: '#2c5d85'
}

##### Some Notes

[fragmented-list]
- focus on pure functions
- try to break down your functions
- in the end all our programs are data transformations
- "What does my function actually do?"
- think in terms of the properties of the input and output
    - not implementation details
- it will catch more edge cases
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
- [github.com/leebyron/testcheck-js](https://github.com/leebyron/testcheck-js)
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
