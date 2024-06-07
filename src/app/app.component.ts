import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
//@ts-ignore
import Layout from '@/app/layouts/Layout.analog'

import 'uno.css'
import '@/assets/css/tailwind.css'
import 'prismjs/themes/prism-tomorrow.css'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Layout],
  template: `<Layout></Layout>`,
})
export class AppComponent {}
