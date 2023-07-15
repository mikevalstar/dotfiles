local tree = require("nvim-tree.api")

require('nvim-tree').setup({
    update_focused_file = {
        enable = true,
    },
    view = {
        width = 50
    },
})

vim.keymap.set("n", "<leader>fg", tree.tree.toggle)

