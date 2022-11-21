# Kubernetes 3-Worker-Node Cluster Setup

We will setup a three worker-node setup locally in Kubernetes on a Ubuntu 18.04 machine. Each node will be a VM spawned using `vagrant`, and the multi-node cluster will be configured using `kubeadm`.

## Setting up VMs

`./Vagrantfile` is a `vagrant` environment file that will create 4 VMs, each running Ubuntu 18.04 (Bionic), and connect it to a public network. One VM will be for the k8s master node and three for the worker nodes. The nodes will have IP addresses `192.168.33.10`-`13`. You can edit the memory and CPUs allocated to each VM in the `vb.customize` field.

- Copy `./Vagrantfile` into a directory on the machine.
- In the directory, run: `vagrant up`
- Each VM is now named `vm0`, `vm1`, `vm2`, and `vm3`. You can ssh into any one using `vagrant ssh <vm-name>`

## Setting up the master node

- ssh into vm0 using `vagrant ssh vm0`
- Copy `./master.sh` into the VM.
- Run:
    ```
    chmod +x master.sh
    ./master.sh
    ```
- See the output of the bash file. You will find a `kubeadm join` command like this:
    ```
    kubeadm join 192.168.33.10:6443 --token hslsis.8sg6fw1ij00mfsnl     --discovery-token-ca-cert-hash sha256:3380da274de441f0261db6add8d3d90bc7e95801553af90396aae760e5b116fe
    ```
- Copy this line for the future. We will use this to connect workers to this host.
- Run `kubectl get nodes`, you should get
    ```
    NAME            STATUS   ROLES    AGE     VERSION
    192.168.33.10   Ready    master   4h      v1.18.0
    ```

## Setting up the worker nodes

ssh into the other VMs and do the following steps for each of them:
- Copy `./worker.sh` into the VM.
- Run:
    ```
    chmod +x worker.sh
    ./worker.sh
    ```
- Run the `kubeadm join` command copied from the master node.

After this, wait for ~90s, and then on the master node, run `kubectl get nodes`. You should get the following:
```
NAME            STATUS   ROLES    AGE     VERSION
192.168.33.10   Ready    master   4h      v1.18.0
192.168.33.11   Ready    worker   3h38m   v1.18.0
192.168.33.12   Ready    worker   3h33m   v1.18.0
192.168.33.13   Ready    worker   3h58m   v1.18.0
```