import React from "react";
import { motion } from "framer-motion";

const OutcomeTracker = ({ context, initialContext, currentPhase, totalPhases }) => {
  // Base metrics for all simulations
  const baseMetrics = [
    { key: 'budget', label: 'Budget', icon: '💰', color: '#1ABC9C', unit: '$' },
    { key: 'timeline', label: 'Timeline', icon: '⏰', color: '#16A085', unit: 'months' },
    { key: 'userSatisfaction', label: 'User Satisfaction', icon: '😊', color: '#4bb1b4ff' },
    { key: 'security', label: 'Security', icon: '🔒', color: '#325fa1ff' },
    { key: 'performance', label: 'Performance', icon: '⚡', color: '#2dac6cff' },
    { key: 'reputation', label: 'Reputation', icon: '⭐', color: '#4496a5ff' }
  ];
  
  // Add AI efficiency metric if it exists in the context
  const metrics = context.aiEfficiency !== undefined 
    ? [...baseMetrics, { key: 'aiEfficiency', label: 'AI Efficiency', icon: '🤖', color: '#667eea' }]
    : baseMetrics;
  
  // Determine if this is an AI-enhanced simulation
  const isAIEnhanced = context.aiEfficiency !== undefined;

  const getMetricDisplay = (metric, value, initialValue) => {
    if (metric.key === 'budget') {
      return `${metric.unit}${value.toLocaleString()}`;
    } else if (metric.key === 'timeline') {
      return `${value} ${metric.unit}`;
    } else {
      return `${value}%`;
    }
  };

  const getProgressColor = (value, initialValue, metricKey) => {
    if (metricKey === 'budget' || metricKey === 'timeline') {
      // For budget and timeline, less is better
      return value <= initialValue ? '#2ecc71' : value <= initialValue * 1.2 ? '#f39c12' : '#e74c3c';
    } else {
      // For other metrics, more is better
      return value >= 80 ? '#2ecc71' : value >= 60 ? '#f39c12' : '#e74c3c';
    }
  };

  const getChangeIndicator = (current, initial, metricKey) => {
    const diff = current - initial;
    if (diff === 0) return null;
    
    const isPositive = metricKey === 'budget' || metricKey === 'timeline' ? diff < 0 : diff > 0;
    return {
      value: Math.abs(diff),
      isPositive,
      symbol: isPositive ? '↗' : '↘',
      color: isPositive ? '#2ecc71' : '#e74c3c'
    };
  };

  return (
    <div style={trackerStyles.container}>
      <div style={trackerStyles.progressHeader}>
        <div style={trackerStyles.phaseProgress}>
          <span style={trackerStyles.progressLabel}>Progress:</span>
          <div style={trackerStyles.progressBar}>
            <motion.div
              style={{
                ...trackerStyles.progressFill,
                width: `${(currentPhase / totalPhases) * 100}%`
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(currentPhase / totalPhases) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <span style={trackerStyles.progressText}>
            {currentPhase} / {totalPhases} phases
          </span>
        </div>
      </div>

      <div style={trackerStyles.metricsContainer}>
        <h3 style={trackerStyles.metricsTitle}>
          {isAIEnhanced ? '🤖 AI-Enhanced Metrics' : 'Project Metrics'}
        </h3>
        <div style={trackerStyles.metricsGrid}>
          {metrics.map((metric) => {
            const currentValue = context[metric.key];
            const initialValue = initialContext[metric.key];
            const change = getChangeIndicator(currentValue, initialValue, metric.key);
            const progressColor = getProgressColor(currentValue, initialValue, metric.key);
            
            return (
              <motion.div
                key={metric.key}
                style={{
                  ...trackerStyles.metricCard,
                  borderLeft: `4px solid ${metric.color}`
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div style={trackerStyles.metricHeader}>
                  <span style={trackerStyles.metricIcon}>{metric.icon}</span>
                  <span style={trackerStyles.metricLabel}>{metric.label}</span>
                  {change && (
                    <span 
                      style={{
                        ...trackerStyles.changeIndicator,
                        color: change.color
                      }}
                    >
                      {change.symbol} {metric.key === 'budget' || metric.key === 'timeline' ? change.value : `${change.value}%`}
                    </span>
                  )}
                </div>
                
                <div style={trackerStyles.metricValue}>
                  <span style={{ color: progressColor, fontWeight: '600' }}>
                    {getMetricDisplay(metric, currentValue, initialValue)}
                  </span>
                </div>

                {metric.key !== 'budget' && metric.key !== 'timeline' && (
                  <div style={trackerStyles.metricBarContainer}>
                    <div style={trackerStyles.metricBar}>
                      <motion.div
                        style={{
                          ...trackerStyles.metricBarFill,
                          background: progressColor,
                          width: `${Math.min(currentValue, 100)}%`
                        }}
                        initial={{ width: `${initialValue}%` }}
                        animate={{ width: `${Math.min(currentValue, 100)}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div style={trackerStyles.summaryContainer}>
        <div style={trackerStyles.overallHealth}>
          <span style={trackerStyles.healthLabel}>Project Health:</span>
          <div style={trackerStyles.healthIndicator}>
            {(() => {
              const avgScore = (context.userSatisfaction + context.security + context.performance + context.reputation) / 4;
              const healthColor = avgScore >= 80 ? '#2ecc71' : avgScore >= 60 ? '#f39c12' : '#e74c3c';
              const healthLabel = avgScore >= 80 ? 'Excellent' : avgScore >= 60 ? 'Good' : 'Needs Attention';
              
              return (
                <span style={{ color: healthColor, fontWeight: '600' }}>
                  {healthLabel} ({Math.round(avgScore)}%)
                </span>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

const trackerStyles = {
  container: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '1rem',
    marginTop: '1rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  progressHeader: {
    marginBottom: '1.5rem'
  },
  phaseProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  progressLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500'
  },
  progressBar: {
    flex: 1,
    height: '8px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #1ABC9C 0%, #16A085 100%)',
    borderRadius: '4px',
    transition: 'width 0.8s ease'
  },
  progressText: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    minWidth: 'fit-content'
  },
  metricsContainer: {
    marginBottom: '1rem'
  },
  metricsTitle: {
    fontSize: '1.1rem',
    color: '#1ABC9C',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '0.75rem'
  },
  metricCard: {
    background: 'rgba(26, 188, 156, 0.1)',
    borderRadius: '8px',
    padding: '0.75rem',
    transition: 'all 0.2s ease',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  metricHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    flexWrap: 'wrap'
  },
  metricIcon: {
    fontSize: '1.2rem'
  },
  metricLabel: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    flex: 1
  },
  changeIndicator: {
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '0.2rem 0.4rem',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '4px'
  },
  metricValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  metricBarContainer: {
    marginTop: '0.5rem'
  },
  metricBar: {
    height: '4px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden'
  },
  metricBarFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.6s ease'
  },
  summaryContainer: {
    borderTop: '1px solid #dee2e6',
    paddingTop: '1rem',
    marginTop: '1rem'
  },
  overallHealth: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  healthLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500'
  },
  healthIndicator: {
    fontSize: '1rem'
  }
};

export default OutcomeTracker;