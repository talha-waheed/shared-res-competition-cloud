# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
    
    config.vm.define "vm0" do |vm0|
      vm0.vm.box = "hashicorp/bionic64"
      vm0.vm.hostname = "vm0"
  
      vm0.vm.network "public_network", ip: "192.168.33.10"
  
      vm0.vm.provider "virtualbox" do |vb|
        vb.name = "vm0"
        vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "2", "--natdnshostresolver1", "on"]     
      end
    end
  
    config.vm.define "vm1" do |vm1|
      vm1.vm.box = "hashicorp/bionic64"
      vm1.vm.hostname = "vm1"
  
      vm1.vm.network "public_network", ip: "192.168.33.11"
  
      vm1.vm.provider "virtualbox" do |vb|
        vb.name = "vm1"
        vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "1", "--natdnshostresolver1", "on"]     
      end
    end
  
    config.vm.define "vm2" do |vm2|
      vm2.vm.box = "hashicorp/bionic64"
      vm2.vm.hostname = "vm2"
  
      vm2.vm.network "public_network", ip: "192.168.33.12"
  
      vm2.vm.provider "virtualbox" do |vb|
        vb.name = "vm2"
        vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "1", "--natdnshostresolver1", "on"]     
      end
    end
  
    config.vm.define "vm3" do |vm3|
      vm3.vm.box = "hashicorp/bionic64"
      vm3.vm.hostname = "vm3"
  
      vm3.vm.network "public_network", ip: "192.168.33.13"
  
      vm3.vm.provider "virtualbox" do |vb|
        vb.name = "vm3"
        vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus", "1", "--natdnshostresolver1", "on"]     
      end
    end
  
  end
  