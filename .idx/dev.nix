# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    # --- Ruby and Jekyll Dependencies ---
    pkgs.ruby_3_1  # IMPORTANT: VERIFY THIS MATCHES YOUR Gemfile (e.g., ruby_3_1, ruby_3_0)
    pkgs.bundler
    pkgs.gcc         # For compiling native extensions for some gems
    pkgs.gnumake     # For compiling native extensions
    pkgs.libxml2     # Often needed by Nokogiri (a common Jekyll dependency)
    pkgs.libxslt     # Often needed by Nokogiri
    pkgs.pkg-config  # Tool to help configure build dependencies

    # --- Node.js (if your project or build process needs it) ---
    pkgs.nodejs_20
    pkgs.nodePackages.npm # Or pkgs.nodePackages.yarn if you use Yarn

    # --- Other packages you might have commented out or might need ---
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
    # pkgs.nodePackages.nodemon
  ];

  # Sets environment variables in the workspace
  env = {
    # If gems like Nokogiri have trouble finding system libraries provided by Nix,
    # uncommenting this can sometimes help.
    # NOKOGIRI_USE_SYSTEM_LIBRARIES = "true";
  };

  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "rebornix.Ruby",
      "castwide.solargraph"  # NO TRAILING COMMA if "vscodevim.vim" below is commented out
      # "vscodevim.vim"     # If you use Vim keybindings (currently commented out)
    ];

    # Enable previews for Jekyll
    previews = {
      enable = true;
      previews = {
        jekyll = {
          # Command to start Jekyll server for preview within IDX
          command = [
            "bundle", "exec", "jekyll", "serve",nix
command = [
  "bundle", "exec", "jekyll", "serve",
  "--host", "0.0.0.0",
  "--port", "$PORT",
  "--livereload",
  "--trace"
];
# Command to start Jekyll server for preview within IDX
# Makes it accessible within IDX's network
# IDX provides $PORT environment variable
# Auto-refresh browser on changes
# More detailed error output from Jekyll

            "--host", "0.0.0.0",         # Makes it accessible within IDX's network
            "--port", "$PORT",           # IDX provides $PORT environment variable
            "--livereload",              # Auto-refresh browser on changes
            "--trace"                    # More detailed error output from Jekyll
          ];
          manager = "web"; # Tells IDX this is a web server
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created, and also after dev.nix changes if IDX triggers a rebuild
      onCreate = {
        # Configure bundler to not install 'production' group gems (if any)
        # and then install all other gems specified in your Gemfile.
        bundle-install = "bundle config set --local without 'production' && bundle install --verbose"; # Added --verbose
      };
      # Runs when the workspace is (re)started
      onStart = {
        # You could automatically start the Jekyll server here if you always want it running.
        # However, manually starting it via the "Previews" panel or terminal gives more control.
        # start-jekyll = "echo 'Starting Jekyll server...' && bundle exec jekyll serve --host 0.0.0.0 --port $PORT --livereload";
      };
    };
  };
}