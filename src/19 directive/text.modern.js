
avalon.directive("text", {
    change: function (value, binding) {
        var elem = binding.element
        if (!elem || elem.disposed)
            return
        value = typeof value === "string" ? value : String(value)
        disposeVirtual(elem.children)
        var children = [new VText(value)]
        pushArray(elem.children, updateVirtual(children, binding.vmodel))
        addHooks(this, binding)
    },
    update: function (node, vnode) {
        var child = vnode.children[0]
        if (!child) {
            return
        }
        node.textContent = child.toHTML()
        updateEntity(node.childNodes, vnode.children, node)
    }
})
