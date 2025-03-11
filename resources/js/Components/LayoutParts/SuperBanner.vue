<template>
    <div class="space-y-0.5">
        <div class="text-2xl font-bold tracking-tight">

        <slot name="bannerAsset" />
</div>
        <h2 class="text-2xl font-bold tracking-tight">
            <slot name="bannerName" />
        </h2>
        <p class="text-muted-foreground">
            <slot name="bannerDescription" />
        </p>
        <p class="text-muted-foreground">
            <slot name="bannerButtons" />
        </p>
    </div>
</template>