-- Configuración de Telescope
require('telescope').setup{
  defaults = {
    -- Configuración de telescope aquí
  }
}

-- Configuración de Oil
require('oil').setup{
  -- Configuración de oil aquí
}

-- Configura la tecla space como leader
vim.g.mapleader = " "

-- Keymaps
local builtin = require('telescope.builtin')
vim.keymap.set('n', '<leader>ff', builtin.find_files, {})
vim.keymap.set('n', '<leader>fg', builtin.live_grep, {})
vim.keymap.set('n', '<leader>fb', builtin.buffers, {})
vim.keymap.set('n', '<leader>fh', builtin.help_tags, {})
vim.keymap.set('n', '<Leader>r', ':Telescope registers<CR>', { noremap = true, silent = true })

vim.api.nvim_set_keymap('n', '<leader>dr', [[:%s/^\([^,]*,[^,]*\),.*/\1/<CR>]], { noremap = true, silent = true })
-- Key mappings for normal mode
local map = vim.keymap.set
local opts = { noremap = true, silent = true }

map('n', '<Leader>w', ':write<CR>', opts)   -- Save the current file
map('n', '<Leader>a', ':wqa<CR>', opts)    -- Save and quit all
map('n', '<Leader>x', ':wq<CR>', opts)     -- Save and quit the current file

-- Clear Search Highlights
vim.keymap.set('n', '<Leader>/', ':nohlsearch<CR>', { noremap = true, silent = true })

-- Search and Replace in the current buffer
vim.keymap.set('n', '<Leader>sr', ':%s//g<Left><Left>', { noremap = true, silent = false })

-- Search and Replace within the visual selection
vim.keymap.set('v', '<Leader>sr', '"hy:%s/<C-r>h//g<Left><Left>', { noremap = true, silent = false })

-- Move selected lines up or down
vim.keymap.set('v', '<C-j>', ":m '>+1<CR>gv=gv", { noremap = true, silent = true })
vim.keymap.set('v', '<C-k>', ":m '<-2<CR>gv=gv", { noremap = true, silent = true })

-- Duplicate the current line
vim.keymap.set('n', '<Leader>d', ':t.<CR>', { noremap = true, silent = true })

-- Keymap para Oil
vim.keymap.set("n", "-", "<CMD>Oil<CR>", { desc = "Open parent directory" })


-- Codificación
vim.opt.encoding = "utf-8"

-- Números de línea
vim.opt.number = true

-- Mostrar números relativos
vim.opt.relativenumber = true
vim.opt.number = true  -- Mantiene el número actual en la línea del cursor

-- Habilitar resaltado de sintaxis
vim.cmd("syntax on")

-- Habilitar detección de tipo de archivo
vim.cmd("filetype plugin indent on")

-- Configuración de tabulación
vim.opt.tabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true

-- Habilitar soporte para mouse
vim.opt.mouse = "a"

-- Mostrar paréntesis/brackets coincidentes
vim.opt.showmatch = true

-- Habilitar soporte de portapapeles
vim.opt.clipboard = "unnamedplus"

-- Habilitar ajuste de línea
vim.opt.wrap = true

-- Resaltar línea actual
vim.opt.cursorline = true

-- Habilitar deshacer persistente
vim.opt.undofile = true

-- Deshabilitar archivos swap (está comentado en tu configuración original)
-- vim.opt.swapfile = false

-- Configurar tema
vim.opt.background = "dark"
vim.cmd("colorscheme desert")

-- Caracteres invisibles (está comentado en tu configuración original)
-- vim.opt.list = true
-- vim.opt.listchars = {
--     space = "·",
--     tab = ">-",
--     eol = "↴"
-- }

-- Para los plugins, necesitarás usar un gestor de plugins como Packer en lugar de vim-plug
-- Aquí está el equivalente usando Packer:
require('packer').startup(function(use)
    use 'ibhagwan/fzf-lua'
end)

-- Configure fzf-lua
require('fzf-lua').setup{
    -- default configuration here
}

-- Keymaps for fzf-lua
vim.keymap.set('n', '<leader>zf', "<cmd>lua require('fzf-lua').files()<CR>", { silent = true })
vim.keymap.set('n', '<leader>zg', "<cmd>lua require('fzf-lua').grep_project()<CR>", { silent = true })
vim.keymap.set('n', '<leader>zb', "<cmd>lua require('fzf-lua').buffers()<CR>", { silent = true })
