function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    for (const prop in reactElement.props) {
        domElement[prop] = reactElement.props[prop];
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'h1',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click here to visit google'
}

const mainContainer = document.querySelector('#root');
