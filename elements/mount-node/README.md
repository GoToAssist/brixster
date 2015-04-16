# MountNode
---

It append a dynamic mount node to the page's body and render into it.

## Params

### id

give an ID to the dynamically created node.

### isActive

define wether the dynamic node is rendered or not.  


### elementInstance

you can pass an existing element instance to be rendered into the dynamic node

	...
	render() {
		var myInstance = React.createElement(MyCustomElement, {...});
		return <MountNode elementInstance={myInstance} />
	}

### elementName, elementProps

you can specify which type of element you want to render (use ReactJS' DOM elements) and
you can pass a set of properties.

the content for the new element is the `children` you give into the MountNode

	...
	render() {
		return (
			<MountNode 
				elementName="p"
				elementProps={{className:'foo'}}
				children="custom content"
				/>
		);
	}