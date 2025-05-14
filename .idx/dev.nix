# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Use https://search.nixos.org/packages to find packages
  packages = [
    # --- Ruby and Jekyll Dependencies ---
    pkgs.ruby_3_1 # Based on previous successful bundle install
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
    # Useful if Nokogiri has issues
  }; # Semicolon needed as 'idx' follows
  idx = {
    extensions = [
 "rebornix.Ruby",
 "castwide.solargraph"
      # "vscodevim.vim"
    ]; # Semicolon needed as 'previews' follows
    previews = {
      enable = true; # Semicolon needed as inner 'previews' attribute set follows
      previews = {
        jekyll = {
          command = [
            "bundle" "exec" "jekyll" "serve"
            "--host" "0.0.0.0"
            "--port" "$PORT"
            "--livereload"
            "--trace"
          ]; # Semicolon needed as 'manager' follows
          manager = "web";
 }; # 'jekyll' is the only/last attribute in this inner 'previews' set
      }; # inner 'previews' is the only/last attribute in the outer 'previews' set
    }; # Semicolon needed as 'workspace' follows
    workspace = {
      # Runs when a workspace is first created, and also after dev.nix changes if IDX triggers a rebuild
      onCreate = {
        # Configure bundler to not install 'production' group gems (if any)
        # and then install all other gems specified in your Gemfile.
        # Using --force with bundle install can help if gems were partially installed or corrupted.
 bundle-install = ''
 bundle config set --local without 'production' && 
 bundle install --verbose --force
        ''; # Use single quotes for multi-line shell commands for clarity
      };
    }; # 'workspace' is the last attribute in 'idx' set
  }; # 'idx' is the last attribute in the top-level set, before the file's final '}'
} # This is the closing brace for the main attribute set
