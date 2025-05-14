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
  ]; # Semicolon needed as 'env' follows

  env = {
    # NOKOGIRI_USE_SYSTEM_LIBRARIES = "true";
  }; # Semicolon needed as 'idx' follows

  idx = {
    extensions = [
      "rebornix.Ruby"
      "castwide.solargraph"
      # "vscodevim.vim"
    ]; # Semicolon needed as 'previews' follows

    previews = {
      enable = true; # Semicolon needed as inner 'previews' follows
      previews = {
        jekyll = {
          command = [ # List of strings for the command and its arguments
            "bundle" "exec" "jekyll" "serve"
            "--host" "0.0.0.0"
            "--port" "$PORT"
            "--livereload"
            "--trace"
          ]; # Semicolon needed as 'manager' follows
          manager = "web";
        }; # No semicolon needed if 'jekyll' is the only/last attribute in this 'previews' set
      }; # No semicolon needed if this inner 'previews' is the only/last attribute in the outer 'previews' set
    }; # Semicolon needed as 'workspace' follows

    workspace = {
      onCreate = {
        bundle-install = "bundle config set --local without 'production' && bundle install --verbose";
      }; # Semicolon needed as 'onStart' follows
      onStart = {
        # start-jekyll = "echo 'Starting Jekyll server...' && bundle exec jekyll serve --host 0.0.0.0 --port $PORT --livereload";
      }; # No semicolon needed as 'onStart' is the last attribute in 'workspace' set
    }; # No semicolon needed as 'workspace' is the last attribute in 'idx' set
 }; # No semicolon needed as 'idx' is the last attribute in the top-level set
}; # No semicolon needed as 'idx' is the last attribute in the top-level set

# Runs when a workspace is first created, and also after dev.nix changes if IDX triggers a rebuild
onCreate nix
    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created, and also after dev.nix changes if IDX triggers a rebuild
      onCreate = {
        bundle-install = "bundle config set --local path 'vendor/bundle' && bundle config set --local without 'production' && bundle install --verbose";
      };
      # Runs when the workspace is (re)started
      onStart = {
        # You could automatically start the Jekyll server here if you always want it running.
        # However, manually starting it via the "Previews" panel or terminal gives more control.
        # start-jekyll = "echo 'Starting Jekyll server...' && bundle exec jekyll serve --host 0.0.0.0 --port $PORT --livereload";
      };
    }; **;** <--- Add semicolon here
  }; # This is the closing brace for the 'idx' attribute set
} # This is the closing brace for the main attribute set
= {
  # Configure bundler to not install 'production' group gems (if any)
  # and then install all other gems specified in your Gemfile.
  bundle-install = ''
    bundle config set --local without 'production'
    bundle install --verbose --force # Add --force to recompile native extensions
  '';
};
