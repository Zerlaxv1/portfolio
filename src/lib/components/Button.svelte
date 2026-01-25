<script lang="ts">
  export let href: string = '';
  export let variant: 'primary' | 'secondary' = 'primary';
  export let icon: any = null;
  export let iconPosition: 'left' | 'right' = 'right';
  export let target: string = '';
  export let rel: string = '';
</script>

<a 
  {href}
  class="btn"
  class:btn-primary={variant === 'primary'}
  class:btn-secondary={variant === 'secondary'}
  {target}
  {rel}
>
  {#if icon && iconPosition === 'left'}
    <svelte:component this={icon} size={18} weight="bold" />
  {/if}
  
  <slot />
  
  {#if icon && iconPosition === 'right'}
    <svelte:component this={icon} size={18} weight="bold" />
  {/if}
</a>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    touch-action: manipulation;
  }
  
  .btn-primary {
    background: hsl(var(--accent-600));
    color: hsl(var(--background-50));
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .btn-primary:hover {
    background: hsl(var(--accent-700));
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
  
  .btn-primary:active {
    transform: translateY(0);
  }
  
  .btn-secondary {
    padding: 0.75rem 1.5rem;
    border: 2px solid hsl(var(--accent-500));
    color: hsl(var(--accent-600));
    background: transparent;
  }
  
  .btn-secondary:hover {
    background: hsl(var(--accent-500));
    color: hsl(var(--background-50));
    transform: translateY(-1px);
  }
  
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
    
    .btn:hover {
      transform: none;
    }
  }
</style>
