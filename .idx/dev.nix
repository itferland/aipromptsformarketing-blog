# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.ruby_3_2 # Or the specific Ruby version your Gemfile needs (e.g., ruby_3_1, ruby_3_0)
                  # Check your Gemfile for a line like "ruby '~> 3.2.0'"
    pkgs.bundler
    pkgs.gcc # For compiling native extensions for some gems
    pkgs.gnumake # For compiling native extensions
    pkgs.libxml2 # Often needed by Nokogiri
    pkgs.libxslt # Often needed by Nokogiri
    pkgs.pkg-config # Tool to help configure build dependencies
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
    # pkgs.nodejs_20
    # pkgs.nodePackages.nodemon
  ];

  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
    ];

    previews = {
      enable = true;
      previews = {
        # For Jekyll, the command is usually `bundle exec jekyll serve ...`
        jekyll = {
          # Command to start Jekyll server for preview
          command = ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "$PORT", "--livereload", "--trace"];
          manager = "web"; # Tells IDX this is a web server
          # No extra env vars needed here typically for Jekyll beyond what IDX provides for $PORT
        };
      };
    };

    workspace = {
      # Runs when a workspace is first created, and also after dev.nix changes if you rebuild
      onCreate = {
        bundle-install = "bundle config set --local without 'production' && bundle install"; # Install gems
        # If you need to ensure specific permissions or other one-time setup
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
        # watch-backend = "npm run watch-backend";
      };
    };
  };
}