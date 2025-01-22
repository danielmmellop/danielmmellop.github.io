---
title: "Instalação do Golang no Ubuntu"
description: "Passo a passo de como instalar o Golang no Ubuntu"
heroImage: "/images/computer-screen.jpg"
heroImageAlt: "tela de computador com alguns comandos aleatórios"
tags: ["ubuntu"]
pubDate: 2025-01-21
---

<p>Infelizmente o Golang não vêm instalado nativamente no sistema operacional Ubuntu, assim como o Python, mas é possível instalar de uma forma bem simples, não chage a ser um .exe, mas nada além do que já fazemos no Ubuntu.</p>

<p>Acesse a página de <a href="https://go.dev/dl">Dowloads</a> do Golang e copie o link da versão que você deseja. </p>

<p>Nos exemplos dos comandos necessários usei o link da versão 1.16.7.</p>

```shell
curl -OL https://golang.org/dl/go1.16.7.linux-amd64.tar.gz
```

<p>Extraia os arquivos baixados na pasta /usr/local</p>

```shell
sudo tar -C /usr/local -xvf go1.16.7.linux-amd64.tar.gz
```

<p>Edite o arquivo ~/.profile adicionando a seguinte linha no final</p>

```shell
export PATH=$PATH:/usr/local/go/bin
```
<p>Recarregue o arquivo .profile</p>

```shell
source ~/.profile
```

