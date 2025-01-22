-- Configuración inicial de Packer
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
  use 'wbthomason/packer.nvim'
  
require('config')

  -- Telescope y dependencias
  use 'nvim-lua/plenary.nvim'
  use 'nvim-telescope/telescope.nvim'
  use 'nvim-treesitter/nvim-treesitter'
  
  -- Oil.nvim
  use 'stevearc/oil.nvim'
end)

