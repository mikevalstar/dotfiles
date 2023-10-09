-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'

    -- Search tool 
    use {
        'nvim-telescope/telescope.nvim', branch = '0.1.x',
        requires = { {'nvim-lua/plenary.nvim'} }
    }

    -- theprimeagen added them
    -- use({ 'rose-pine/neovim', as = 'rose-pine' })
    use( 'folke/tokyonight.nvim' )

    --vim.cmd('colorscheme rose-pine')
    vim.cmd('colorscheme tokyonight-night')

    -- tresitter does code highlighting when no LSP 
    use( 'nvim-treesitter/nvim-treesitter', { run =  ':TSUpdate'})
    use( 'nvim-treesitter/playground' )
    use( 'nvim-treesitter/nvim-treesitter-context' );
    -- sets points/bookmarks to jump around
    use( 'theprimeagen/harpoon' )
    -- powerful undo comand thing
    use( 'mbbill/undotree' )
    use( 'wuelnerdotexe/vim-astro' )
    -- git
    use( 'tpope/vim-fugitive' )

    use( 'eandrju/cellular-automaton.nvim' )
    use( 'vim-airline/vim-airline' )
    use( 'vim-airline/vim-airline-themes' )
    use( 'ryanoasis/vim-devicons' )
    use( 'lukas-reineke/indent-blankline.nvim' )
    use( 'numToStr/Comment.nvim' )
    use { 'folke/todo-comments.nvim', requires={ { 'nvim-lua/plenary.nvim'} } }

    -- should help with nvim commands
    use {
        "folke/which-key.nvim",
        config = function()
            vim.o.timeout = true
            vim.o.timeoutlen = 300
            require("which-key").setup {
                -- your configuration comes here
                -- or leave it empty to use the default settings
                -- refer to the configuration section below
            }
        end
    }
    -- game
    use ( 'ThePrimeagen/vim-be-good' )
    -- tree thing
    use {
        "nvim-tree/nvim-tree.lua",
        requires = {
            "nvim-tree/nvim-web-devicons",
        },
        config = function()
            require("nvim-tree").setup {}
        end,
    }

    -- LSP BABY!
    use {
        'VonHeikemen/lsp-zero.nvim',
        branch = 'v2.x',
        requires = {
            -- LSP Support
            {'neovim/nvim-lspconfig'},             -- Required
            {                                      -- Optional
            'williamboman/mason.nvim',
            run = function()
                pcall(vim.cmd, 'MasonUpdate')
            end,
        },
        {'williamboman/mason-lspconfig.nvim'}, -- Optional

        -- Autocompletion
        {'hrsh7th/nvim-cmp'},     -- Required
        {'hrsh7th/cmp-nvim-lsp'}, -- Required
        {'L3MON4D3/LuaSnip'},     -- Required
    }
}

end)
