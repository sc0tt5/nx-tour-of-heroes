import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd } from '@angular/router';

@Injectable()
export class ShellService {
  constructor(private title: Title, @Inject(DOCUMENT) private doc: Document) {}

  setPageTitle(event: ActivationEnd): void {
    const lastChild = event.snapshot;
    const title = lastChild.data.title ? `Nx Demo - ${lastChild.data.title}` : 'Nx Demo';
    this.title.setTitle(title);
  }

  setCanonicalURL(): HTMLLinkElement {
    // create canonical element
    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');

    // append to dom
    this.doc.head.appendChild(link);

    // set current url
    link.setAttribute('href', `${this.doc.location.host}${this.doc.location.pathname}`); // URL without querystring

    // return it so will be pure fn
    return link;
  }
}
