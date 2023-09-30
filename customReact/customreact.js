function customRender(reactelem, container){
    // const domelem = document.createElement(reactelem.type);
    // domelem.innerHTML = reactelem.children;
    // domelem.setAttribute('href', reactelem.props.href);
    // domelem.setAttribute('target', reactelem.props.target);
    // container.appendChild(domelem);

    const domelem = document.createElement(reactelem.type);
    domelem.innerHTML = reactelem.children;
    for (const prop in reactelem.props) {
        if(prop === 'children') continue;
        domelem.setAttribute(prop, reactelem.props[prop]);
    }
    container.appendChild(domelem);
}

const reactelem = {
    type: 'a',
    props: {
        href : "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactelem, mainContainer);