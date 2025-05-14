nix
# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    # --- Ruby and Jekyll Dependencies ---
    pkgs.ruby_3_1  # Based on previous successful bundle install
    pkgs.bundler
    pkgs.gcc
    pkgs.gnumake
    pkgs.libxml2
    pkgs.libxslt
    pkgs.pkg-config

    # --- Node.js ---
    pkgs.nodejs_20
    pkgs.nodePackages.npm
  ];

  env = {
    # NOKOGIRI_USE_SYSTEM_LIBRARIES = "true";
  };

  idx = {
    extensions = [
      "rebornix.Ruby"
      "castwide.solargraph"
      # "vscodevim.vim"
    ];

    previews = {
      enable = true;
      previews = {
        jekyll = {
          command = [ # List of strings for the command and its arguments
            "bundle" "exec" "jekyll" "serve"
            "--host" "0.0.0.0"
            "--port" "$PORT"
            "--livereload"
            "--trace"
          ];
          manager = "web";
        };
      };
    };

    workspace = {
      onCreate = {
        bundle-install = "bundle config set --local without 'production' && bundle install --verbose";
      };
      onStart = {
        # start-jekyll = "echo 'Starting Jekyll server...' && bundle exec jekyll serve --host 0.0.0.0 --port $PORT --livereload";
      };
    };
  };
}