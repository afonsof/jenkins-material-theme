# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :forwarded_port, guest: 80, host: 8082
  config.vm.provision "shell", :inline => "
    # Install Jenkins
    wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
    sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
    apt-get update
    apt-get -y install jenkins

    # Install dependencies
    apt-get -y install apache2
    a2enmod proxy
    a2enmod proxy_http

    # Setup Apache proxy
    echo \"<VirtualHost *:80>\
      ServerName ci.netsensia.com\
      ServerAlias jenkins.local\
      ProxyRequests Off\
      <Proxy *>\
        Order deny,allow\
        Allow from all\
      </Proxy>\
      ProxyPreserveHost on\
      ProxyPass / http://localhost:8080/\
    </VirtualHost>\
    \" > /etc/apache2/sites-available
    a2ensite jenkins.conf
    service apache2 restart

    # Install Jenkins plugins
    apt-get -y install curl
    cd /var/lib/jenkins/plugins

    #curl -OL http://updates.jenkins-ci.org/latest/analysis-core.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/ccm.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/checkstyle.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/cloverphp.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/dry.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/git.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/git-client.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/jdepend.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/jshint-checkstyle.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/plot.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/pmd.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/postbuild-task.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/violations.hpi
    #curl -OL http://updates.jenkins-ci.org/latest/xunit.hpi
    curl -OL http://updates.jenkins-ci.org/latest/simple-theme-plugin.hpi

    chown -R jenkins:nogroup *

    curl -X POST http://jenkins.local/reload
    /etc/init.d/jenkins restart
"
end